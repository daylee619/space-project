import styled from "@emotion/styled"
export const ShareModalBox = styled.div`
  z-index: 9999;
  position: fixed;
  top: 160px;
  left: 471px;
  border: 1px solid #e5e5e5;
  background-color: white;
  opacity: 1;
  padding: 20px;
`
export const ShareTop = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: center;

  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  padding-bottom: 20px;
  width: 300px;

  div {
    margin-left: 110px;
  }
`

export const ShareBtn = styled.button`
  width: 30px;
  background-color: #fff;
  border: none;
  cursor: pointer;
`
export const ShareImg = styled.img`
  display: flex;
  width: 15px;
  cursor: pointer;
`
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-top: 10px;
  margin-left: 25px;
  img {
    width: 45px;
    display: flex;
    margin: 10px;
  }
`
