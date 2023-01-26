import * as S from './WisthList.style'

const WishList = () => {
    return (
        <S.Contain>
            <S.PageTitle>위시리스트</S.PageTitle>
            <S.ItemTitleBox>
                <S.ItemTitleCheckBox type='checkbox' />
                <S.ItemTitleInfo>상품정보</S.ItemTitleInfo>
                <S.ItemTitlePoint>적립금</S.ItemTitlePoint>
                <S.ItemTitlePost>배송구분</S.ItemTitlePost>
                <S.ItemTitlePostPrice>배송비</S.ItemTitlePostPrice>
                <S.ItemTitleTotalPrice>합계</S.ItemTitleTotalPrice>
                <S.ItemTitleSelect>선택</S.ItemTitleSelect>
            </S.ItemTitleBox>
            {
                <S.ItemBox>
                    <S.ItemCheckBox type='checkbox' />
                    <S.ItemInfoBox>
                        <img src='' alt='' />
                        <div>
                            <div></div>
                            <div>옵션변경</div>
                        </div>
                    </S.ItemInfoBox>
                    <S.ItemPoint>-</S.ItemPoint>
                    <S.ItemPost>-</S.ItemPost>
                    <S.ItemPostPrice>-</S.ItemPostPrice>
                    <S.ItemTotalPrice>39900</S.ItemTotalPrice>
                    <S.ItemSelectBox>
                        <button>주문하기</button>
                        <button>장바구니</button>
                        <button>삭제</button>
                    </S.ItemSelectBox>
                </S.ItemBox>
            }
        </S.Contain>
    )
}

export default WishList