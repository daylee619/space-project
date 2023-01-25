import * as S from './MypageFilterList.style'

const MypageFilterList = () => {
    return (
        <>
            <S.OrderListTitle>최근 주문내역</S.OrderListTitle>
            <S.OrderListTitleBox>
                <S.OrderDateTitle>주문일자 [주문번호]</S.OrderDateTitle>
                <S.OrderInfoTitle>상품정보</S.OrderInfoTitle>
                <S.OrderCountTitle>수량</S.OrderCountTitle>
                <S.OrderPriceTitle>주문금액</S.OrderPriceTitle>
                <S.OrderStateTitle>주문상태</S.OrderStateTitle>
                <S.OrderChagneTitle>취소/교환/반품</S.OrderChagneTitle>
            </S.OrderListTitleBox>
            <S.OrderList>
                주문 내역이 없습니다.
            </S.OrderList>
        </>
    )
}

export default MypageFilterList