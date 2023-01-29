import { Fragment } from 'react'
import { IOptionPropsType } from '../../../../components/units/mypage/Mypage.type'
import * as S from './OptionModal.style'


const WishListOptionModal = (props: IOptionPropsType) => {
    const { modalHandler, colorProps, selectStateHandler, selectState, nameProps, idProps } = props
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
                                    {colorProps.map((el) => {
                                        return (
                                            <Fragment key={el.colorId}>
                                                <option value={el.colorId}>{`(${el.colorId})${el.colorName}`}</option>
                                            </Fragment>
                                        )
                                    })}
                                </S.ColorSelecte>
                            </S.ColorSelectorBox>
                            <S.SizeSelectorBox>
                                <S.SizeText>Size</S.SizeText>
                                <S.ColorSelecte name='size'>
                                    <option value='value' selected>- [필수] 옵션을 선택해 주세요 -</option>
                                    {colorProps.map((el) => el.size?.map((item) =>
                                        Number(selectState) === Number(el.colorId) &&
                                        <Fragment key={item.sizeId}>
                                            <option value={item.sizeId}>{`(${item.sizeId})${item.sizeName}`}</option>
                                        </Fragment>
                                    ))}
                                </S.ColorSelecte>
                            </S.SizeSelectorBox>
                        </S.OptionSelectorBox>
                    </S.OptionBox>
                </S.ModalContentBox>
            </S.ModalContentContain>
            <S.ModalConfirmBox>
                <S.Addbutton>추가</S.Addbutton>
                <S.ChangeButton>변경</S.ChangeButton>
            </S.ModalConfirmBox>
        </S.Contain>
    )
}

export default WishListOptionModal