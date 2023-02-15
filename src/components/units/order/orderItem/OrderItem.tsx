import { IOrderItemPropsDataType } from '../Order.type'
import * as S from './OrderItem.style'

const OrderItem = (props: IOrderItemPropsDataType) => {

    return (
        <>
            {props.orderData?.orderInfo?.map((el, index) => {
                return (
                    <S.Contain key={index}>
                        <S.BigBox>
                            <S.ImgBox>
                                <S.ThumbnailImg src={el?.thumbnail} alt={el?.name} />
                            </S.ImgBox>
                            <S.OrderItemContentBox>
                                <S.ItemNameBox>
                                    <div>
                                        {el?.name}
                                    </div>
                                    <S.ItemXButton>
                                        x
                                    </S.ItemXButton>
                                </S.ItemNameBox>
                                <S.ItemOption>{`[옵션: (${el?.cartId ?? el.quantity})${el?.color}/${el?.size}]`}</S.ItemOption>
                                <S.ItemQuantity>{`수량: ${el?.quantity}개`}</S.ItemQuantity>
                            </S.OrderItemContentBox>
                        </S.BigBox>
                        <S.ItemPrice>
                            {el?.priceByProduct}
                        </S.ItemPrice>
                    </S.Contain>
                )
            })}
        </>
    )
}

export default OrderItem