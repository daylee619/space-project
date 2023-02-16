import styled from "@emotion/styled"
export const Container = styled.div`
  width: 90%;
  margin-left: 100px;

  .slick-arrow {
    z-index: 10;
    display: flex;
    width: 20px;
    height: 20px;

    &::before {
      color: black;
    }
  }

  .slick-prev {
    left: -50px;

    &::before {
      content: "<";
    }
  }

  .slick-next {
    right: 10px;

    &::before {
      content: ">";
    }
  }
`
export const NewProductWrapper = styled.div`
  cursor: pointer;
`
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`
export const TitleTop = styled.div`
  display: flex;

  img {
    display: flex;
  }
`
export const ItemName = styled.div`
  font-size: 12px;
`

export const Price = styled.div`
  font-size: 17px;
  font-weight: 500;
`
export const Review = styled.div`
  font-size: 10px;
  color: #9a9a9a;
  margin-top: 18px;
`
export const ColorBox = styled.div`
  display: flex;
`
export const Color = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  margin-right: 2px;
`
