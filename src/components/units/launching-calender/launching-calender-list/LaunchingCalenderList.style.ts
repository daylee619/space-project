import styled from "@emotion/styled"

export const Contain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 25px;
  margin: 20px 0;
`

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
`

export const ItemContain = styled.div`
  width: 70%;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ItemBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`

export const CalenderImg = styled.img`
  display: flex;
  width: 400px;
  height: 400px;
  margin-bottom: 15px;

  &:hover {
    cursor: pointer;
  }
`

export const Date = styled.div`
  font-size: 13px;
  color: gray;
  margin-bottom: 8px;
`
