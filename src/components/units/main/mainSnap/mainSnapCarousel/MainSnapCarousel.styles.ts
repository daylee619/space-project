import styled from "@emotion/styled"
export const Container = styled.div`
  width: 90%;
  padding-left: 180px;

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
    left: -70px;

    &::before {
      content: "<";
    }
  }

  .slick-next {
    right: -30px;

    &::before {
      content: ">";
    }
  }
`
export const SnapImg = styled.img`
  display: flex;
  width: 220px;
  height: 230px;
  cursor: pointer;
  object-fit: cover;
`

export const SnapBox = styled.div`
  position: relative;
  cursor: pointer;
  :hover {
    div {
      opacity: 1;
      transition: all 0.3s ease-in-out;
    }
    img {
      filter: brightness(50%);
    }
  }
`
export const TagBox = styled.div`
  position: absolute;
  color: #fff;

  top: 100px;
  opacity: 0;
`
export const HashTag = styled.div`
  font-size: 14px;
  margin: 0px 40px;
`

export const ProductTag = styled.div`
  margin-top: 80px;
  margin-left: 80px;
  font-size: 12px;
`
