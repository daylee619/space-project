import styled from "@emotion/styled"

export const Contain = styled.div`
  width: 350px;
  /* height: 250px; */
  left: 50%;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid black;
`

export const Header = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: rgb(40, 40, 40);
`

export const HeaderTitle = styled.div`
  font-size: 13px;
  color: white;
`

export const HeaderClose = styled.div`
  font-size: 13px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`

export const ContentBox = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContentImg = styled.img`
  width: 200px;
  margin-bottom: 20px;
`

export const ContentText = styled.div`
  font-size: 14px;
`

export const ConfirmBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid lightgray;
`

export const ConfirmCartButton = styled.button`
  width: 80px;
  height: 30px;
  background-color: black;
  border: 1px solid black;
  color: white;
  font-size: 12px;

  &:hover {
    cursor: pointer;
  }
`

export const ConfirmKeepButton = styled.button`
  width: 80px;
  height: 30px;
  background-color: white;
  border: 1px solid lightgray;
  color: black;
  font-size: 12px;

  &:hover {
    cursor: pointer;
  }
`
