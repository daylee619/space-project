import { Carousel } from 'antd';
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { ILookBookDetailDataType, ILookBookDetailPropsType } from '../LookBook.type';
import * as S from './LookBookDetail.style'



const LookBookDetail = (props: ILookBookDetailPropsType) => {
    const { cloesHandler, clickModal } = props

    const [lookBookDetailData, setLookBookDetailData] = useState<ILookBookDetailDataType[]>([])
    const [pointerState, setPointerState] = useState<number>()

    // data get 나중에 clickModal 로 받아온 id 값 전달하여 데이터 받아오기
    const lookBookDatailDataHandler = async () => {
        try {
            await axios.get('/data/look_book_detail.json')
                .then(res => {
                    const { data } = res
                    setLookBookDetailData(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    const pointerStateHandler = (id: number) => {
        setPointerState(id)
    }

    const pointerLeave = () => {
        setPointerState(0)
    }

    useEffect(() => {
        lookBookDatailDataHandler()
    }, [])

    return (
        <>
            <S.ShadowBox onClick={cloesHandler} />
            <S.Contain>
                <div>
                    <Carousel autoplay style={{ width: '450px' }}>
                        {
                            lookBookDetailData.map(el =>
                                el.lookbook.map(item =>
                                    <div key={item.productId}>
                                        <S.CarouselImg src={item.image} />
                                    </div>
                                )
                            )
                        }
                    </Carousel>
                </div>
                <S.Cloes
                    onClick={cloesHandler}
                >
                    X
                </S.Cloes>
                <S.ContentContain>
                    {
                        lookBookDetailData.map(el =>
                            <Fragment key={el.id}>
                                <S.TitleBox>
                                    <S.SubTitle>{el.sub_title}</S.SubTitle>
                                    <S.Title>{el.title}</S.Title>
                                </S.TitleBox>
                                <S.ContentBox>
                                    <S.Content>{el.content}</S.Content>
                                </S.ContentBox>
                            </Fragment>
                        )
                    }
                    <div>
                        <div>연관상품</div>
                        <S.ConectImgBox>
                            {
                                lookBookDetailData.map(el =>
                                    el.lookbook.map(item =>
                                        <S.ProductContain key={item.productId}>
                                            <S.Box>
                                                <S.ConectImg src={item.image} onPointerEnter={() => { pointerStateHandler(item.productId); }} />
                                                {
                                                    pointerState === item.productId
                                                    &&
                                                    <S.Shadow
                                                        onPointerLeave={pointerLeave}
                                                    ></S.Shadow>
                                                }
                                            </S.Box>
                                            <S.ProductBox>
                                                <S.ProductName>{item.productName}</S.ProductName>
                                                <S.ProductPrice>{item.price}</S.ProductPrice>
                                            </S.ProductBox>
                                        </S.ProductContain>
                                    )
                                )
                            }
                        </S.ConectImgBox>
                    </div>
                </S.ContentContain>
            </S.Contain>
        </>
    )
}

export default LookBookDetail