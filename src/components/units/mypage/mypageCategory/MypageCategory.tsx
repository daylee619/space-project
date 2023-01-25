
import { useState } from 'react'
import MypageMain from '../mypageMain/MypageMain'
import MypageOrderSearch from '../mypageOrderSearch/MypageOrderSearch'
import MypageReview from '../mypageReivew/MypageReview'
import WishList from '../mypageWishList/WishList'
import * as S from './MyPageCategory.style'

const MypageCategory = () => {
    const [filterId, setFilterId] = useState<string>('main')

    // div태그에 id 속성이 존재하지 않으므로 받아오는 값을 인자로 전달하는 방식으로 수정
    const filterIdHandler = (id: string) => {
        setFilterId(id)
    }

    return (
        <S.BigContain>
            <S.Contain>
                <S.CategoryTitle
                    onClick={() => { filterIdHandler('main'); }}
                >
                    마이페이지
                </S.CategoryTitle>
                <S.CategoryBox>
                    <S.InfoBox>
                        <S.InfoTitle>나의 쇼핑 정보</S.InfoTitle>
                        <S.Category
                            onClick={() => { filterIdHandler('order_serch'); }}
                        >
                            주문/배송 & 취소/반품
                        </S.Category>
                    </S.InfoBox>
                    <S.InfoBox>
                        <S.InfoTitle>나의 활동 정보</S.InfoTitle>
                        <S.Category>회원정보 수정</S.Category>
                        <S.Category
                            onClick={() => { filterIdHandler('review'); }}
                        >
                            나의 게시물 관리
                        </S.Category>
                        <S.Category
                            onClick={() => { filterIdHandler('wish_list'); }}
                        >
                            위시리스트
                        </S.Category>
                        <S.Category>스냅 좋아요</S.Category>
                        <S.Category>회원탈퇴</S.Category>
                    </S.InfoBox>
                </S.CategoryBox>
            </S.Contain>
            {
                filterId === 'order_serch'
                &&
                <MypageOrderSearch />
            }
            {
                filterId === 'main'
                &&
                <MypageMain />
            }
            {
                filterId === 'review'
                &&
                <MypageReview />
            }
            {
                filterId === 'wish_list'
                &&
                <WishList />
            }
        </S.BigContain>
    )
}

export default MypageCategory