import styled from "@emotion/styled"

export default function ShippingModal(props) {
  return (
    <>
      <ShippingWrapper>
        {props.isShippingModal ? (
          <ShippingModalBox>
            <ShippingTitleTop>
              <div>배송안내</div>
              <CloseButton onClick={props.close}>
                <CloseImg src=" https://spao.com/morenvyimg/top_search_close.png" />
              </CloseButton>
            </ShippingTitleTop>

            <ShipNoticeWrapper>
              <div>
                배송 방법 : 택배 <br />
                배송 지역 : 전국지역 <br />
                배송 비용 : 2,500 <br />
                배송 기간 : 1일 ~ 5일
                <br /> 배송 안내 : 배송기간은 구매일부터 영업일 기준으로
                계산됩니다.
                <br />
                산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는 경우가
                있습니다.
                <br />
                고객님께서 주문하신 상품은 입금 확인 후 배송해 드립니다. 다만,
                상품 종류에 따라서 상품의 배송이 다소 지연될 수 있습니다.
                <br />
              </div>
              <SeparatedDelivery>
                [분리 배송 안내]
                <br /> 주문하신 상품이 2개 이상인 경우 빠른 배송을 위하여 분리
                배송 될 수 있습니다.
                <br />
                재고 상황에 따라 물류센터 및 오프라인 매장에서 출고됨을 안내
                드립니다.
              </SeparatedDelivery>
              <StorePickup>
                <span>[매장픽업]</span> <br />
                1. 강남, 홍대, 성신여대에서 픽업 가능(추후 확대 예정) 합니다.
                <br /> 2. 픽업가능한 시간을 문자로 안내해 드립니다. (결제 후
                평균 2시간 이후 픽업가능)
                <br /> 3. 오후6시 이후 결제건은 “다음날 오후” 에 픽업이
                가능합니다. (매장별 오픈 시간이 다를 수 있으니 매장 방문전
                확인해 주세요) <br />
                4. 재고가 많지 않은 상품은 결제시 재고소진으로 “결제실패”가 발생
                할 수 있습니다.
                <br /> 5. 매장픽업상품은 교환이 불가능 합니다. (매장 반품 후
                현장 판매 가능)
                <br /> 6. 매장픽업상품은 부분 반품(취소)는 불가능하며, 전체
                반품(취소) 후 재결제가 필요합니다.
                <br /> 7. 배송상태가 “포장완료”일 경우 결제취소가 불가능합니다.
                ("상품준비중"에서 전체취소가능)
                <br /> 8. 결제일 기준 +4일까지 픽업하지 않은 주문건은, +5일에
                자동 반품 처리됩니다. (예 : 월요일 결제 후 픽업하지 않으면
                토요일 자동 반품)
                <br /> 9. 반품은 수령 후 +7일이내 픽업한 매장에서만 가능합니다.
                <br />
              </StorePickup>
              <PickupNotice>* 문의는 픽업 매장으로 확인 바랍니다.</PickupNotice>
              <br />
              <br />
              <NoticeWrapper>
                ※공지사항※ <br />
                현재 시스템 점검 중으로 픽업 서비스는 임시 중단된 상황입니다.
                <br />
                이용 시 참고 부탁 드립니다. 감사합니다.
              </NoticeWrapper>
            </ShipNoticeWrapper>
          </ShippingModalBox>
        ) : null}
      </ShippingWrapper>
    </>
  )
}

export const ShippingWrapper = styled.div`
  position: fixed;
  left: 179px;
  z-index: 9999;
  top: 50.5px;
  opacity: 1;
`
export const ShippingModalBox = styled.div`
  width: 550px;
  position: relative;
  padding: 0 50px 50px 50px;
  background-color: #fff;
  overflow: scroll;
  height: 350px;
  
  }
`
export const ShippingTitleTop = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  /* height: 80px; */
  line-height: 50px;
  font-weight: 500;
  border-bottom: 1px solid #e5e5e5;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  /* margin-left: 200px; */
`
export const CloseImg = styled.img`
  width: 10px;
  cursor: pointer;
  display: flex;
`
export const ShipNoticeWrapper = styled.div`
  font-size: 10px;
  position: relative;
  top: 30px;
  left: 0;
  height: 500px;
  line-height: 18px;
`
export const SeparatedDelivery = styled.div`
  margin-top: 20px;
`
export const StorePickup = styled.div`
  margin-top: 20px;

  span {
    color: rgb(255, 0, 0);
    font-weight: bold;
  }
`
export const PickupNotice = styled.div`
  color: rgb(255, 0, 0);
  font-weight: bold;
  margin-top: 20px;
`
export const NoticeWrapper = styled.div`
  color: rgb(255, 0, 0);
  font-weight: bold;
  padding-bottom: 30px;
`
