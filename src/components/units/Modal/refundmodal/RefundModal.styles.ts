import styled from "@emotion/styled"
export const RefundWrapper = styled.div`
  position: fixed;
  left: 179px;
  top: 122px;
  z-index: 9999;
  opacity: 1;
  padding: 0 50px 50px 50px;
  width: 500px;
  height: 400px;
  overflow: scroll;
  background-color: #fff;
`
export const RefundTitleTop = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 60px;
  line-height: 80px;
  border-bottom: 1px solid #e5e5e5;
  font-weight: 500;
`
export const RefundTilte = styled.div`
  font-size: 18px;
`
export const RufundTitleButton = styled.button`
  background-color: transparent;
  border: none;

  img {
    width: 10px;
    cursor: pointer;
  }
`
export const NoticeWrapper = styled.div`
  font-size: 10px;
  line-height: 20px;
  position: relative;
  top: 0;
  left: 0;
  margin-top: 30px;
  color: #1a1a1a;
`
export const StoreNotice = styled.div`
  color: rgb(51, 51, 51);
  font-weight: bold;

  p {
    color: rgb(255, 0, 0);
    font-weight: bold;
  }
`
export const NoticeBox = styled.div`
  margin-top: 25px;
  color: rgb(255, 0, 0);
  font-weight: bold;
`
export const NomalShip = styled.div`
  color: rgb(255, 0, 0);
  font-weight: bold;
  margin-top: 30px;
`
export const Cancel = styled.div`
  color: rgb(51, 51, 51);
  font-weight: bold;
`
export const ShippingFee = styled.div`
  margin-top: 20px;

  p {
    color: rgb(51, 51, 51);
    font-weight: bold;
  }
`
export const ReturnNotice = styled.div`
  margin-top: 20px;
  p {
    color: rgb(51, 51, 51);
    font-weight: bold;
  }
  span {
    color: rgb(255, 0, 0);
    font-weight: bold;
  }
`
export const NonExchange = styled.div`
  margin-top: 20px;

  p {
    color: rgb(51, 51, 51);
    font-weight: bold;
  }
`
