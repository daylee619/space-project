import styled from "@emotion/styled"
export const ModalWrapper = styled.div`
  width: 450px;
  border: 1px solid #757575;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  margin: -175px 0 0 -225px;
`
export const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px 35px 7px 19px;
  color: #fff;
  background: #333;
`
export const ModalTopTitle = styled.div`
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
`
export const ModalMiddle = styled.div`
  padding: 40px 35px;
  text-align: center;
  background: #fff;
`
export const ModalMiddleContent = styled.div`
  font-weight: 400;
  color: #1a1a1a;
  font-size: 16px;
  margin-top: 10px;
`
export const SpaceTitle = styled.div`
  font-size: 40px;
`
export const ModalBtnWrapper = styled.div`
  padding: 9px;
  border-top: 1px solid #d7d5d5;
  text-align: center;
  background: #fbfafa;
`
export const MoveToCart = styled.button`
  width: 96px;
  padding: 6px 8px;
  background-color: #1a1a1a;
  border: 1px solid transparent;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
`

export const ShoppingContinue = styled.button`
  width: 96px;
  padding: 6px 8px;
  font-size: 13px;
  border: 1px solid #d1d1d1;
  color: #222;
  background-color: #fff;
  cursor: pointer;
`
