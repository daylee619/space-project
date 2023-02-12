import styled from "@emotion/styled"

export const Contain = styled.div`
  background-color: white;
  /* position: absolute; */
  position: fixed;
  top: 20px;
  left: 20%;
  width: 60%;
  height: 90%;
  display: flex;
  z-index: 2;
`

export const CarouselImg = styled.img`
  width: 450px;
  height: 716.5px;
`

export const ContentContain = styled.div`
  padding: 40px;
`

export const TitleBox = styled.div`
  margin-bottom: 50px;
  margin-top: 20px;
`

export const SubTitle = styled.span`
  color: gray;
  font-size: 15px;
`

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 38px;
  font-weight: 600;
`

export const ContentBox = styled.div`
  margin-bottom: 100px;
`

export const Content = styled.span`
  color: gray;
  font-size: 13px;
`

export const ConectImgBox = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  width: 350px;
  height: 290px;
  margin-top: 30px;
`

export const Box = styled.div`
  margin-right: 25px;
  position: relative;
`

export const ConectImg = styled.img`
  width: 150px;
  height: 220px;
`

export const Shadow = styled.div`
  width: 150px;
  height: 220px;
  top: 0;
  position: absolute;
  background-color: rgba(245, 245, 245, 0.5);

  &:hover {
    cursor: pointer;
  }
`
export const ProductContain = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductBox = styled.div`
  margin-top: 15px;
  width: 150px;
`

export const ProductName = styled.div`
  font-size: 12px;
`

export const ProductPrice = styled.div`
  font-size: 12px;
  margin-top: 10px;
`

export const Cloes = styled.div`
  position: relative;
  font-size: 35px;
  left: 450px;

  &:hover {
    cursor: pointer;
  }
`

export const ShadowBox = styled.div`
  position: fixed;
  background-color: rgba(45, 45, 45, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`

export const ThumbnailImg = styled.img`
  width: 450px;
  height: 100%;
`
