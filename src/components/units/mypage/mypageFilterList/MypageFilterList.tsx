/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { IMypageFilterListPropsType } from '../Mypage.type'
import MypageItem from '../mypageItem/MypageItem'
import * as S from './MypageFilterList.style'

const MypageFilterList = (props: IMypageFilterListPropsType) => {
    const { itemData, mainData } = props

    return (
        <>
            <S.OrderListTitle>최근 주문내역</S.OrderListTitle>
            <S.OrderListTitleBox>
                <S.OrderDateTitle>주문일자 [주문번호]</S.OrderDateTitle>
                <S.OrderInfoTitle>상품정보</S.OrderInfoTitle>
                <S.OrderCountTitle>수량</S.OrderCountTitle>
                <S.OrderPriceTitle>주문금액</S.OrderPriceTitle>
                <S.OrderStateTitle>주문상태</S.OrderStateTitle>
                <S.OrderChagneTitle>취소/환불</S.OrderChagneTitle>
            </S.OrderListTitleBox>
            {/* {
                (!itemData || !mainData) &&
                <S.OrderList>
                    주문 내역이 없습니다.
                </S.OrderList>
            } */}
            {
                <MypageItem itemData={itemData} mainData={mainData} />
            }
        </>
    )
}

export default MypageFilterList