import * as S from './OrderInfo.style'

interface IOrderInfoPropsType {
    totalPrice: number
}

const OrderInfo = (props: IOrderInfoPropsType) => {
    return (
        <S.Contatin>
            <S.UpperBox>
                <S.OrderItemPriceBox>
                    <S.Content>
                        주문상품
                    </S.Content>
                    <S.Counte>
                        {props.totalPrice}
                    </S.Counte>
                </S.OrderItemPriceBox>
                <S.OrderItemPriceBox>
                    <S.Content>
                        배송비
                    </S.Content>
                    <S.Counte>
                        +0
                    </S.Counte>
                </S.OrderItemPriceBox>
                <S.OrderItemPriceBox>
                    <S.Content>
                        할인/부가결제
                    </S.Content>
                    <S.Counte>
                        -0
                    </S.Counte>
                </S.OrderItemPriceBox>
            </S.UpperBox>
            <S.UndderBox>
                <S.TotalPriceBox>
                    <S.TotalPriceTitle>최종 결제 금액</S.TotalPriceTitle>
                    <S.TotalPrice>{props.totalPrice}</S.TotalPrice>
                </S.TotalPriceBox>
            </S.UndderBox>
        </S.Contatin>
    )
}

export default OrderInfo