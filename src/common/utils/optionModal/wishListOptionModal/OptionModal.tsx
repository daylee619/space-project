import axios from 'axios'
import { Fragment, useState } from 'react'
import { IOptionPropsType } from '../../../../components/units/mypage/Mypage.type'
import { API_IP } from '../../ApiIp'
import * as S from './OptionModal.style'


const WishListOptionModal = (props: IOptionPropsType) => {
    const { modalHandler, colorProps, selectStateHandler, selectState, nameProps, idProps, productId, setOptionChangeMessage } = props
    const [optionId, setOptionId] = useState<number>()

    // wishList Item Option Change
    const wishItemOptionChangeHandler = async () => {
        try {
            setOptionChangeMessage('')
            await axios.patch(`http://${API_IP}:3000/like`, {
                productId,
                optionId
            }, {
                headers: {
                    "authorization": localStorage.getItem('access_token')
                }
            })
                .then(res => {
                    const { data } = res
                    setOptionChangeMessage(data.message)
                    modalHandler(idProps)
                })
        } catch (error) {
            console.log(error)
        }
    }

    // wishList Item Change and Add
    const wishItemOptionChangeForAddHandler = async () => {
        try {
            setOptionChangeMessage('')
            await axios.post(`http://${API_IP}:3000/like/option`, {
                optionId,
                productId
            }, {
                headers: {
                    'authorization': localStorage.getItem('access_token')
                }
            })
                .then(res => {
                    const { data } = res
                    setOptionChangeMessage(data.message)
                })
                .then(() => { modalHandler(idProps); })
        } catch (error) {
            console.log(error)
        }
    }


    // selected change function
    const selectedChangeHandler = (optionId: number) => {
        setOptionId(optionId)
    }


    return (
        <S.Contain>
            <S.HeaderBox>
                <S.HeaderOptionText>옵션변경</S.HeaderOptionText>
                <S.HeaderCloseText onClick={() => { modalHandler(idProps); }}>x</S.HeaderCloseText>
            </S.HeaderBox>
            <S.ModalContentContain>
                <S.ModalContentBox>
                    <S.ModalContentText>
                        {nameProps}
                    </S.ModalContentText>
                    <S.OptionBox>
                        <S.OptionText>상품옵션</S.OptionText>
                        <S.OptionSelectorBox>
                            <S.ColorSelectorBox>
                                <S.ColorText>Color</S.ColorText>
                                <S.ColorSelecte name='color' onChange={(e) => { selectStateHandler(e.target.value); }}>
                                    <option value='value' selected>- [필수] 옵션을 선택해 주세요 -</option>
                                    {colorProps?.map((el) => {
                                        return (
                                            <Fragment key={el.colorId}>
                                                <option value={el.colorId ?? ""}>{`(${el.colorId})${el.colorName}`}</option>
                                            </Fragment>
                                        )
                                    })}
                                </S.ColorSelecte>
                            </S.ColorSelectorBox>
                            <S.SizeSelectorBox>
                                <S.SizeText>Size</S.SizeText>
                                <S.ColorSelecte name='size' onChange={(e) => { selectedChangeHandler(Number(e.target.value)); }}>
                                    <option value='value' selected>- [필수] 옵션을 선택해 주세요 -</option>
                                    {colorProps?.map((el) => el.options?.map((item) =>
                                        Number(selectState) === Number(el.colorId) &&
                                        <Fragment key={item.sizeId}>
                                            <option value={item.optionId ?? ''}>{`(${item.sizeId})${item.size}`}</option>
                                        </Fragment>
                                    ))}
                                </S.ColorSelecte>
                            </S.SizeSelectorBox>
                        </S.OptionSelectorBox>
                    </S.OptionBox>
                </S.ModalContentBox>
            </S.ModalContentContain>
            <S.ModalConfirmBox>
                <S.Addbutton
                    onClick={wishItemOptionChangeForAddHandler}
                >
                    추가
                </S.Addbutton>
                <S.ChangeButton
                    onClick={wishItemOptionChangeHandler}
                >
                    변경
                </S.ChangeButton>
            </S.ModalConfirmBox>
        </S.Contain>
    )
}

export default WishListOptionModal