import styled from "@emotion/styled"

interface ICssPropsType {
  backImg: string
}

export const Contain = styled.div`
  width: 100%;
  height: 1000px;
  background-image: ${(props: ICssPropsType) => `url(${props.backImg})`};
  display: flex;
  justify-content: center;
`

export const ContainBox = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: black;
  margin-bottom: 20px;
`

export const Content = styled.div`
  font-size: 35px;
  font-weight: 900;
  color: black;
  margin-bottom: 20px;
`

export const SubContent = styled.div`
  font-size: 23px;
  font-weight: 700;
  color: black;
  margin-bottom: 20px;
`

export const LikeContain = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 25px;
  padding: 2px;
`

export const LikeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  background-color: white;
  border: 1px solid black;
  border-radius: 25px;
  padding: 3px 5px;

  &:hover {
    cursor: pointer;
  }
`

export const Like = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-left: 8px;
`

export const CountBox = styled.div`
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CountHeart = styled.div``

export const Count = styled.div`
  font-size: 25px;
  margin-left: 8px;
`

export const OutTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin: 20px 0;
`

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 5px;
  margin-bottom: 25px;

  &:hover {
    cursor: pointer;
  }
`

export const OutContain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
