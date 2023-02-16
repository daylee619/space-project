import styled from "@emotion/styled"
export const Container = styled.div`
  width: 90%;
  margin-left: 120px;
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
    right: 50px;

    &::before {
      content: ">";
    }
  }
`
export const LookbookBox = styled.div`
  max-width: 400px;
  transition: all 0, 2s linear;
  overflow: hidden;

  :hover {
    cursor: pointer;
    :hover {
      img {
        filter: brightness(50%);
        transform: scale(1.2);
        transition: transform 0.5s;
      }
    }
  }
`
export const LookBookImg = styled.img`
  width: 400px;
  height: 250px;
  display: flex;
  object-fit: cover;
`
export const LookbookTextWrapper = styled.div`
  position: relative;
`

export const LookbookSubTitle = styled.div`
  position: absolute;
  top: -250px;
  color: white;
  font-weight: 700;
  padding: 20px;
`
export const LookbookTitle = styled.div`
  position: absolute;
  top: -130px;
  font-size: 30px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;
  color: #ffffff;
  padding: 20px;
`
