/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useRouter } from 'next/router'
import { getDate, mdate } from '../../../../common/utils/date/Date'
import * as S from './MyPageCategory.style'

const MypageCategory = () => {
    const router = useRouter()
    return (
        <S.Contain>
            <S.CategoryTitle
                onClick={async () => await router.push('/mypage')}
            >
                마이페이지
            </S.CategoryTitle>
            <S.CategoryBox>
                <S.InfoBox>
                    <S.InfoTitle>나의 쇼핑 정보</S.InfoTitle>
                    <S.Category
                        onClick={async () => await router.push(`/mypage/order/history/${localStorage.getItem('access_token')}?history_start_date=${getDate(new Date())}&history_end_date=${mdate(new Date(), 3, 0)}&order_status=${''}`)}
                    >
                        주문/배송 & 취소/반품
                    </S.Category>
                </S.InfoBox>
                <S.InfoBox>
                    <S.InfoTitle>나의 활동 정보</S.InfoTitle>
                    <S.Category>회원정보 수정</S.Category>
                    <S.Category
                    // onClick={() => { filterIdHandler('review'); }}
                    >
                        나의 게시물 관리
                    </S.Category>
                    <S.Category
                        onClick={async () => await router.push('/mypage/wish-list')}
                    >
                        위시리스트
                    </S.Category>
                    <S.Category>회원탈퇴</S.Category>
                </S.InfoBox>
            </S.CategoryBox>
        </S.Contain>
    )
}

export default MypageCategory