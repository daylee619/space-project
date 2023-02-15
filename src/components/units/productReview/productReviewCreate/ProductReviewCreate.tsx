import { Rate } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ChangeEvent, Fragment, useEffect, useState } from 'react';
import { API_IP } from '../../../../common/utils/ApiIp';
import * as S from './ProductReviewCreate.style'

interface IDefaultDataStateType {
    reviewId: number,
    thumbnail: string,
    content: string,
    star: number
}


const ProductReviewCreate = () => {
    const [showImages, setShowImages] = useState<string[]>([]);
    const [postImages, setPostImages] = useState<File[]>([])
    const [singlePostImage, setSinglePostImage] = useState<File>()
    const [reviewComment, setReivewComment] = useState<string>('')
    const [rateCount, setRateCount] = useState<number>(0)

    // 수정하기 기본 state
    const [defaultDataState, setDefaultDataState] = useState<IDefaultDataStateType>()

    const router = useRouter()

    // 이미지 상대경로 저장
    const handleAddImages = (event: ChangeEvent<HTMLInputElement>) => {
        const imageLists: any = event.target.files;

        // append
        // const formData: any = new FormData();
        // formData.append('file', imageLists[0]);
        // postImages.map(el => formData.append('file', el))

        // /* key 확인하기 */
        // for (const key of formData.keys()) {
        //     console.log('key', key);
        // }

        // /* value 확인하기 */
        // for (const value of formData.values()) {
        //     console.log('value', value);
        // }

        // setPostImages(prv => [...prv,imageLists[0]])

        let imageUrlLists = [...showImages];
        if (imageLists[0]) {
            const currentImageUrl = URL.createObjectURL(imageLists[0]);
            imageUrlLists.push(currentImageUrl);
            setPostImages(prv => [...prv, imageLists[0]])
            setSinglePostImage(imageLists[0])
        }

        if (imageUrlLists.length > 3) {
            imageUrlLists = imageUrlLists.slice(0, 3);
        }

        setShowImages(imageUrlLists);
    };

    // X버튼 클릭 시 이미지 삭제
    const handleDeleteImage = (id: number) => {
        setShowImages(showImages.filter((_, index) => index !== id));
        setPostImages(postImages.filter((_, index) => index !== id))
    };

    // comment change
    const reivewCommentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setReivewComment(e.target.value)
    }

    // confirm post handler 
    const confirmHandler = async () => {
        try {
            await axios.post(`http://${API_IP}:3000/review/product`, {
                productId: router.query.productId,
                content: reviewComment,
                star: rateCount,
                file: singlePostImage
            }, {
                headers: {
                    "authorization": `${localStorage.getItem('access_token')}`,
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(res => {
                    const { data } = res
                    if (data.message === 'REVIEW_CREATED')
                        router.push('/mypage/my_review')
                })
        } catch (error) {
            alert('등록에 실패하였습니다, 다시 시도해 주세요')
            console.log(error)
        }
    }

    // modify handler
    const modifyHandler = async () => {
        try {
            await axios.patch(`http://${API_IP}:3000/review/product`, {
                reviewId: router.query.productId,
                content: reviewComment || defaultDataState?.content,
                star: rateCount || defaultDataState?.star,
                file: singlePostImage ?? defaultDataState?.thumbnail
            }, {
                headers: {
                    "authorization": `${localStorage.getItem('access_token')}`,
                    "Content-Type": "multipart/form-data"
                }
            }
            )
                .then(res => {
                    const { data } = res
                    if (data.message === 'REVIEW_UPDATED')
                        router.push('/mypage/my_review')
                })
        } catch (error) {
            console.log(error)
        }
    }

    // 수정하였을 경우 기본 데이터
    const defaultDataHandler = async () => {
        try {
            await axios.get(`http://${API_IP}:3000/review/${router.query.productId}`, {
                headers: {
                    'authorization': localStorage.getItem('access_token')
                }
            })
                .then(res => {
                    const { data } = res
                    if (data) {
                        setDefaultDataState(data)
                        setShowImages([data.thumbnail])
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        defaultDataHandler()
    }, [])

    return (
        <S.Contain>
            <S.Box>
                <S.TitleBox>
                    <S.Title>Review</S.Title>
                </S.TitleBox>
                <S.ReviewCreateContain>
                    <S.ReivewImgBox>
                        {
                            showImages.map((el, id) =>
                                <Fragment key={id}>
                                    <S.ReviewImg
                                        src={el}
                                        alt={`${el}/${id}`}
                                    />
                                    <S.Delete
                                        onClick={() => { handleDeleteImage(id); }}
                                    >
                                        x
                                    </S.Delete>
                                </Fragment>
                            )
                        }
                    </S.ReivewImgBox>
                    <S.WarringSpan>* 사진은 보이시는 사진중 첫번째 사진만 리뷰에서 보여집니다.</S.WarringSpan>
                    <S.RateBox>
                        <Rate
                            onChange={(value) => { setRateCount(value); }}
                            value={rateCount || defaultDataState?.star}
                        />
                    </S.RateBox>
                    <S.ReivewCreateBox>
                        <S.ReviewCreate
                            defaultValue={defaultDataState?.content}
                            onChange={reivewCommentHandler}
                        />
                        {
                            defaultDataState
                                ?
                                <S.ReviewConfirm
                                    onClick={modifyHandler}
                                >
                                    수정
                                </S.ReviewConfirm>
                                :
                                <S.ReviewConfirm
                                    onClick={confirmHandler}
                                >
                                    등록
                                </S.ReviewConfirm>
                        }
                    </S.ReivewCreateBox>
                    <S.FileUploadBox>
                        <S.FileUploadLabel
                            htmlFor='reviewFile'
                        >
                            파일 올리기
                        </S.FileUploadLabel>
                        <S.FileUpload
                            id='reviewFile'
                            type='file'
                            multiple
                            onChange={handleAddImages}
                        />
                    </S.FileUploadBox>
                </S.ReviewCreateContain>
            </S.Box>
        </S.Contain>
    )
}

export default ProductReviewCreate