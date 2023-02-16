import styled from "@emotion/styled"
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
