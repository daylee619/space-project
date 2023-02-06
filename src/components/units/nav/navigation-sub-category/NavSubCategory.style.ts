import styled from "@emotion/styled"

export const SubCategoryContain = styled.div`
  position: absolute;
  width: 100%;
  height: 350px;
  top: 82px;
  left: 0px;
  border-bottom: 1px solid lightgray;
  background-color: white;
  z-index: 1;
`

export const Box = styled.div`
  padding: 80px 200px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`

export const NamingBox = styled.div`
  display: flex;
`

export const NamingCategoryBox = styled.div`
  margin-right: 100px;
`

export const NamingCategory = styled.div`
  margin-bottom: 15px;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    color: black;
  }
`

export const SubCategoryBox = styled.div`
  padding-left: 15px;
  border-left: 1px solid lightgray;
`

export const SubCategory = styled.div`
  margin-bottom: 15px;
  font-size: 14px;
  color: gray;

  &:hover {
    cursor: pointer;
    color: black;
  }
`

export const ProductImgContain = styled.div`
  display: flex;
  position: relative;
`

export const ProductImgBox = styled.div`
  margin-right: 15px;
`

export const ProductImg = styled.img`
  width: 150px;
  height: 200px;
`

export const ProductImgShadow = styled.div`
  position: absolute;
  top: 0px;
  background-color: rgba(45, 45, 45, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 200px;
  color: white;
  font-size: 13px;

  &:hover {
    cursor: pointer;
  }
`

export const Shadow = styled.div`
  position: absolute;
  background-color: rgba(45, 45, 45, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
