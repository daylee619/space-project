import styled from "@emotion/styled"
import ProductItem from "src/common/libraries/productItem/ProductItem.tsx"

export default function MainTab(props) {
  // const onClickLike = (e, id) => {
  //   // setLike(!like)
  // }
  return (
    <>
      <WeeklyBestProduct>
        {props.data.weeklyBest?.map((el, idx) => (
          <WeeklyBestProductItem key={el.id}>
            <ProductItem
              imgWidth="250px"
              imgHeight="400px"
              menuWidth="200px"
              bottom="403px"
              imgUrl={el.thumbnail}
              data={props.optionTotal}
              style={{ position: "absolute" }}
            />
            <ProductLank
              style={{ backgroundColor: idx > 3 ? "  #b5b5b5" : "#e86434" }}
            >
              {idx + 1}
            </ProductLank>
            <ItemDescription>
              <DescriptionTop>
                <ItemName>{el.name}</ItemName>
                <LikeBtn
                  // value={el.id}
                  onClick={() => props.likeHartHandler(el.id, el.isLike)}
                // onClick={props.b}
                >
                  <img
                    src={
                      props.like.includes(el.id) || el.isLike !== null
                        ? "/images/redHeart.png"
                        : "/images/whiteHeart.png"
                    }
                  />
                </LikeBtn>
              </DescriptionTop>

              <ItemPrice key={el.id}>{el.price}</ItemPrice>
              <ColorBox>
                {el.productColor?.map((item, index) => (
                  <Color
                    key={index}
                    color={item}
                  ></Color>
                ))}
              </ColorBox>

              <ItemReview key={el.id}>리뷰 {el.review}건</ItemReview>
            </ItemDescription>
          </WeeklyBestProductItem>
        ))}
      </WeeklyBestProduct>
    </>
  )
}

export const ColorBox = styled.div`
  display: flex;
`
export const Color = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  margin-right: 2px;
`

export const WeeklyBestProduct = styled.div`
  display: table;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  /* margin-left: 100px; */
  animation-duration: 1s;
  transition: all 0.3s;
`
export const WeeklyBestProductItem = styled.div`
  width: 20%;
  margin: 10px;
  margin-top: 50px;
  position: relative;
`
export const ProductLank = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  padding: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 54px;
  text-align: center;
  background-color: #e86434;
`

export const ItemDescription = styled.div`
  padding: 20px 0;
`
export const DescriptionTop = styled.div`
  display: flex;
`
export const ItemName = styled.div`
  font-size: 14px;
  width: 90%;
  line-height: 17px;
`
export const LikeBtn = styled.button`
  border: none;
  background-color: transparent;
`
export const ItemPrice = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: #1a1a1a;
`
export const ItemReview = styled.div`
  font-size: 10px;
  color: #9a9a9a;
  margin-top: 10px;
`
