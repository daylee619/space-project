import * as S from "./MainTab.styles"
import ProductItem from "../../../common/libraries/ProductItem"
import { IMainTabProps } from "./MainTab.types"
export default function MainTab(props: IMainTabProps) {
  return (
    <>
      <S.WeeklyBestProduct>
        {props.data?.weeklyBest?.map((el, idx: number) => (
          <S.WeeklyBestProductItem key={el.id}>
            <ProductItem
              imgWidth="250px"
              imgHeight="400px"
              menuWidth="200px"
              bottom="403px"
              imgUrl={el.thumbnail}
              data={props.optionTotal}
              style={{ position: "absolute" }}
            />
            <S.ProductLank
              style={{ backgroundColor: idx > 3 ? "  #b5b5b5" : "#e86434" }}
            >
              {idx + 1}
            </S.ProductLank>
            <S.ItemDescription>
              <S.DescriptionTop>
                <S.ItemName>{el.name}</S.ItemName>
                <S.LikeBtn onClick={() => props.likeHartHandler(el.id)}>
                  <img
                    src={
                      props.like.includes(el.id) || el.isLike !== null
                        ? "/images/redHeart.png"
                        : "/images/whiteHeart.png"
                    }
                  />
                </S.LikeBtn>
              </S.DescriptionTop>

              <S.ItemPrice key={el.id}>{el.price}</S.ItemPrice>
              <S.ColorBox>
                {el.productColor?.map((item, index: number) => (
                  <S.Color
                    key={index}
                    color={item}
                  ></S.Color>
                ))}
              </S.ColorBox>

              <S.ItemReview key={el.id}>리뷰 {el.review}건</S.ItemReview>
            </S.ItemDescription>
          </S.WeeklyBestProductItem>
        ))}
      </S.WeeklyBestProduct>
    </>
  )
}
