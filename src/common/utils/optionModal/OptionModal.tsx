import { ChangeEvent, Fragment } from 'react'
import * as S from './OptionModal.style'

interface IOptionPropsType {
    modalHandler: () => void
    colorProps: IColorType[]
    colorIdHandler: (e: ChangeEvent<HTMLSelectElement>) => void,
    colorIdState: string
}

interface IColorType {
    colorId: number,
    colorName: string,
    options: IOptionsType[]
}

interface IOptionsType {
    size: string,
    stock: string,
    optionId: string
}

const CartOptionModal = (props: IOptionPropsType) => {
    const { modalHandler, colorProps, colorIdHandler, colorIdState } = props
    return (
        <S.Contain>
            <S.HeaderBox>
                <S.HeaderOptionText>옵션변경</S.HeaderOptionText>
                <S.HeaderCloseText onClick={modalHandler}>x</S.HeaderCloseText>
            </S.HeaderBox>
            <S.ModalContentContain>
                <S.ModalContentBox>
                    <S.ModalContentText>
                        [1월 27일 순차 출고](마시마로) 지구로 이사온 마시마로(LIGHT BLUE)_SPPPD23U05
                    </S.ModalContentText>
                    <S.OptionBox>
                        <S.OptionText>상품옵션</S.OptionText>
                        <S.OptionSelectorBox>
                            <S.ColorSelectorBox>
                                <S.ColorText>Color</S.ColorText>
                                <S.ColorSelecte name='color' onChange={colorIdHandler}>
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
                                    {colorProps.map((el) => el.options.map((item) =>
                                        Number(colorIdState) === el.colorId &&
                                        <Fragment key={item.optionId}>
                                            <option value={item.optionId}>{`(${item.optionId})${item.size}`}</option>
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

export default CartOptionModal