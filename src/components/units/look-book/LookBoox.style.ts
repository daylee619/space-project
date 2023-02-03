import styled from "@emotion/styled"

export const Contain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
  margin: 50px;
`

export const ListContain = styled.div`
  width: 100%;
`

export const ListBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ListItemBox = styled.div`
  position: relative;
  width: 30%;
  display: flex;
  justify-content: center;
`

export const ListItemImgBox = styled.div`
  margin-bottom: 50px;
`

export const ListItemImg = styled.img`
  width: 350px;
  height: 400px;
`

export const ListItemTitelBox = styled.div`
  position: absolute;
  width: 350px;
  height: 400px;
  top: 0;
  background-color: rgba(45, 45, 45, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

export const ListItemTitle = styled.div`
  font-size: 25px;
  color: white;
  margin-bottom: 15px;
`

export const ListItemSubTitle = styled.div`
  font-size: 30px;
  color: white;
  font-weight: 700;
  margin-bottom: 15px;
`

export const ListItemText = styled.div`
  font-size: 30px;
  width: 130px;
  height: 30px;
  color: white;
  padding: 15px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ShadowBox = styled.div`
  position: absolute;
  background-color: rgba(45, 45, 45, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
`
