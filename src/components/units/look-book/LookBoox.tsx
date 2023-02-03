import axios from 'axios'
import { useEffect, useState } from 'react'
import { ILookBookListDataType } from './LookBook.type'
import LookBookDetail from './lookBook_Detail/LookBookDetail'
import * as S from './LookBoox.style'


const LookBook = () => {
    const [lookBookData, setLookBookData] = useState<ILookBookListDataType[]>([])
    const [hoverState, setHoverState] = useState<number>()
    const [clickModal, setClickModal] = useState<number>()

    const lookBookDataHandler = async () => {
        try {
            await axios.get('/data/look_book_list.json')
                .then(res => {
                    const { data } = res
                    setLookBookData(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    const hoverHandler = (id: number) => {
        setHoverState(id)
    }

    const leaveHandler = () => {
        setHoverState(0)
    }

    // click modal
    const clickHandler = (id: number) => {
        setClickModal(id)
    }

    const cloesHandler = () => {
        setClickModal(0)
    }

    useEffect(() => {
        lookBookDataHandler()
    }, [])

    return (
        <S.Contain>
            <S.Title>LOOKBOOK</S.Title>
            <S.ListContain>
                <S.ListBox>
                    {lookBookData.map(el =>
                        <>
                            <S.ListItemBox key={el.id}>
                                <S.ListItemImgBox
                                    onPointerEnter={() => { hoverHandler(el.id); }}
                                >
                                    <S.ListItemImg src={el.thumbnail} />
                                </S.ListItemImgBox>
                                {
                                    hoverState === el.id
                                    &&
                                    <S.ListItemTitelBox
                                        onClick={() => { clickHandler(el.id); }}
                                        onPointerLeave={leaveHandler}
                                    >
                                        <S.ListItemTitle>{el.title}</S.ListItemTitle>
                                        <S.ListItemSubTitle>{el.sub_title}</S.ListItemSubTitle>
                                        <S.ListItemText>VIEW ALL</S.ListItemText>
                                    </S.ListItemTitelBox>
                                }
                            </S.ListItemBox>
                            {
                                clickModal === el.id
                                &&
                                <LookBookDetail
                                    cloesHandler={cloesHandler}
                                    clickModal={clickModal}
                                />
                            }
                        </>
                    )
                    }
                </S.ListBox>
            </S.ListContain>
        </S.Contain>
    )
}

export default LookBook