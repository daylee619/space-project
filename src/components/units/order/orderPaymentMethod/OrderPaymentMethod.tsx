import * as S from './OrderPaymentMethod.style'

interface IOrderPaymentMethodPropsType {
    points?: string
}

const OrderPaymentMethod = (props: IOrderPaymentMethodPropsType) => {
    const { points } = props
    return (
        <S.Contain>
            <S.Point>포인트</S.Point>
            <S.Points>MyPoint <S.PointsNumber>{Number(points)}</S.PointsNumber></S.Points>
        </S.Contain>
    )
}

export default OrderPaymentMethod;