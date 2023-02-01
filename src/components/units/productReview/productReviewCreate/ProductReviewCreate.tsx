import axios from 'axios';
import { ChangeEvent, Fragment, useState } from 'react';
import * as S from './ProductReviewCreate.style'

const ProductReviewCreate = () => {
    const [showImages, setShowImages] = useState<string[]>([]);
    const [postImages, setPostImages] = useState<File[]>([])
    const [reviewComment, setReivewComment] = useState<string>('')

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
            await axios.post('api', {
                comment: reviewComment,
                img_files: postImages
            }, {
                headers: {
                    'Content-Type': "multiful-file",
                    "authorization": localStorage.getItem('access_token')
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

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
                    <S.ReivewCreateBox>
                        <S.ReviewCreate
                            onChange={reivewCommentHandler}
                        />
                        <S.ReviewConfirm
                            onClick={confirmHandler}
                        >
                            등록
                        </S.ReviewConfirm>
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