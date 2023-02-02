import * as S from './OrderItem.style'


interface IOrderItemPropsType {
    orderData: IOrderDataType
}

interface IOrderDataType {
    userInfo?: IUserInfoType,
    orderInfo?: IOrderInfoType[]
}

interface IUserInfoType {
    name: string,
    email: string,
    phone: string,
    points: string,
    address?: string,
    detail_address?: string,
    zip_code?: string
}

interface IOrderInfoType {
    cartId: number,
    name: string,
    thumbnail: string,
    priceByProduct: string,
    quantity: number,
    color: string,
    size: string
}

const OrderItem = (props: IOrderItemPropsType) => {
    return (
        <>
            {props.orderData.orderInfo?.map((el: IOrderInfoType, index: number) => {
                return (
                    <S.Contain key={index}>
                        <S.BigBox>
                            <S.ImgBox>
                                <S.ThumbnailImg src={el.thumbnail} alt={el.name} />
                            </S.ImgBox>
                            <S.OrderItemContentBox>
                                <S.ItemNameBox>
                                    <div>
                                        {el.name}
                                    </div>
                                    <S.ItemXButton>
                                        x
                                    </S.ItemXButton>
                                </S.ItemNameBox>
                                <S.ItemOption>{`[옵션: (${el.cartId})${el.color}/${el.size}]`}</S.ItemOption>
                                <S.ItemQuantity>{`수량: ${el.quantity}개`}</S.ItemQuantity>
                            </S.OrderItemContentBox>
                        </S.BigBox>
                        <S.ItemPrice>
                            {el.priceByProduct}
                        </S.ItemPrice>
                    </S.Contain>
                )
            })}
        </>
    )
}

export default OrderItem