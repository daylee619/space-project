import MypageFilterList from '../mypageFilterList/MypageFilterList'
import * as S from './MypageOrderSearch.style'

const MypageOrderSearch = () => {
    return (
        <S.Contain>
            <S.PageTitle>주문조회</S.PageTitle>
            <S.SearchBox>
                <S.SearchInBox>
                    <S.SearchSelectBox>
                        <select>
                            <option>전체 주문처리상태</option>
                            <option>입금전</option>
                            <option>배송준비중</option>
                            <option>배송중</option>
                            <option>배송완료</option>
                            <option>취소</option>
                            <option>교환</option>
                            <option>반품</option>
                        </select>
                    </S.SearchSelectBox>
                    <S.SearchDateButtonBox>
                        <S.SearchDateButton>오늘</S.SearchDateButton>
                        <S.SearchDateButton>1주일</S.SearchDateButton>
                        <S.SearchDateButton>1개월</S.SearchDateButton>
                        <S.SearchDateButton>3개월</S.SearchDateButton>
                        <S.SearchDateButton>6개월</S.SearchDateButton>
                    </S.SearchDateButtonBox>
                    <S.SearchDateBox>
                        <S.SearchDate type='date' />
                        <S.SearchSign>~</S.SearchSign>
                        <S.SearchDate type='date' />
                    </S.SearchDateBox>
                    <S.SearchConfirmBox>
                        <S.SearchConfirm>조회</S.SearchConfirm>
                    </S.SearchConfirmBox>
                </S.SearchInBox>
            </S.SearchBox>
            <div>
                <MypageFilterList />
            </div>
        </S.Contain>
    )
}

export default MypageOrderSearch