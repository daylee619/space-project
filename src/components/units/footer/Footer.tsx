import * as S from './Footer.styled'

const Footer = () => {
    return (
        <S.Contain>
            <S.ContainInBox>
                <S.Section>
                    <S.InfoOwnContain>
                        <S.Phone>1234-1234</S.Phone>
                        <S.InfoOwnBox>
                            <S.InfoOwnTime>상담시간 : 24시간</S.InfoOwnTime>
                            <S.InfoOwnSpan>email : fakeEmail@gmail.com (단체주문 문의)</S.InfoOwnSpan>
                            <S.InfoOwnSpan>email : fake2Email@gmail.com (협찬 문의)</S.InfoOwnSpan>
                        </S.InfoOwnBox>
                    </S.InfoOwnContain>
                    <S.InfoTwoContain>
                        <S.FirstUl>
                            <S.FirstUlLi>브랜드 소개</S.FirstUlLi>
                            <S.FirstUlLi>매장 안내</S.FirstUlLi>
                        </S.FirstUl>
                        <S.SecondUl>
                            <S.SecondUlLi>개인정보 치리방침</S.SecondUlLi>
                            <S.SecondUlLi>약관 안내</S.SecondUlLi>
                            <S.SecondUlLi>윤리윤리</S.SecondUlLi>
                        </S.SecondUl>
                        <S.ThirdUl>
                            <S.ThirdUlLi>공지사항</S.ThirdUlLi>
                            <S.ThirdUlLi>혜택</S.ThirdUlLi>
                            <S.ThirdUlLi>채용정보</S.ThirdUlLi>
                            <S.ThirdUlLi>인사정보</S.ThirdUlLi>
                        </S.ThirdUl>
                    </S.InfoTwoContain>
                </S.Section>
                <S.Box>
                    <S.Span>(주) 스페이스 패션 회사 | 사업자 등록번호 : 1111-2222-3333 [사업자 정보 확인 불가] | 통신 판매 신고업 : 제 1111 - 2222 호</S.Span>
                    <S.Span>대표이사 : 제임스 스페이스 | 서울특별시 프로젝트용 주소 | 개인정보 보호 책임자 : 제임스 스페이스</S.Span>
                    <S.Span>포토폴리오용으로 제작된 사이트입니다.</S.Span>
                </S.Box>
            </S.ContainInBox>
        </S.Contain>
    )
}

export default Footer