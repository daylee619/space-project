import * as S from "./MainWeeklyBest.styles"
import axios from "axios"
import { useEffect, useState } from "react"
import { API_IP } from "../../../../common/utils/ApiIp"
// import ProductItem from "src/common/libraries/productItem/ProductItem.tsx"
import MainTab from "../../mainTab/MainTab"
import { IWeeklyBest } from "./MainWeeklyBest.types"
export default function MainWeeklyBest() {
  const [data, setData] = useState<IWeeklyBest[]>([])
  const [like, setLike] = useState([])
  useEffect(() => {
    axios.get(`http://${API_IP}:3000/product/best`).then((res) => {
      setData(res.data)
    })
  }, [])

  const likeHartHandler = async (id: number) => {
    try {
      if (!like.includes(id)) {
        setLike(like.concat(id))
        await axios.post(
          "",
          {
            productId: id,
          },
          {
            headers: {
              authorization: "token",
            },
          }
        )
      }
      if (like.includes(id)) {
        setLike(like.filter((el) => id !== el))
        await axios.post(
          "api",
          {
            productId: id,
          },
          {
            headers: {
              authorization: "token",
            },
          }
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  const [currTab, setCurrTab] = useState(0)
  const [tab, setTab] = useState(() => "")

  // useEffect(() => {
  //   axios.get("/data/getPopularProductForMain.json").then((res) => {
  //     setData(res.data)
  //     // console.log(data)
  //   })
  // }, [])

  const optionBox = []
  const size: number[] = []
  const optionTotal = []
  const optionFn = data.weeklyBest?.forEach((el) =>
    el.stockCheck?.map((item) => {
      optionBox.push(`(${item.colorId})${item.colorName} / Size : `)
      item?.opt?.forEach((element) => size.push(element.sizeName))
    })
  )
  for (let i = 0; i < optionBox.length; i++) {
    optionTotal.push(optionBox[i] + size[i])
  }

  //   console.log(optionTotal)

  // const onClickLike = (e, id) => {
  //   setLikeIndex(id)
  // }

  // const b = (e) => {
  //   if (!likeList.includes(e.target.value)) {
  //     setLikeList(likeList.concat(e.target.value))
  //   }
  //   if (likeList.includes(e.target.value)) {
  //     setLikeList(likeList.filter((el) => el !== e.target.value))
  //   }
  // }
  // console.log(likeList)

  // console.log(currTab)

  return (
    <S.MainWrapper>
      <S.WeeklyBestTitle>Weekly Best</S.WeeklyBestTitle>
      <div>
        {data.categories?.map((el, idx) => (
          <S.WeeklyBestTab key={el.id}>
            <li
              key={el.id}
              onClick={() => {
                setTab(idx)
                setCurrTab(idx)
              }}
              value={idx}
              style={
                tab === idx
                  ? { borderBottom: "4px solid black" }
                  : { borderBottom: "none" }
              }
            >
              {el.name}
            </li>
          </S.WeeklyBestTab>
        ))}
      </div>
      {/* <WeeklyBestProduct>
        {data.weeklyBest?.map((el, idx) => (
          <WeeklyBestProductItem key={el.id}>
            <ProductItem
              imgWidth="250px"
              imgHeight="400px"
              menuWidth="200px"
              bottom="403px"
              imgUrl={el.thumbnail}
              data={optionTotal}
            />
            <ItemDescription>
              <DescriptionTop>
                <ItemName key={el.id}>{el.name}</ItemName>

                <LikeBtn
                  key={el.id}
                  value={el.id}
                  onClick={b}
                >
                  <img
                    src={
                      likeIndex === idx
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
      </WeeklyBestProduct> */}
      {/* {data && (currTab === 0) | (currTab === 1) | (currTab === 2) ? (
        <MainTab
          data={data}
          optionBox={optionBox}
          size={size}
          optionTotal={optionTotal}
          optionFn={optionFn}
          likeHartHandler={likeHartHandler}
          like={like}
          // onClickLike={onClickLike}
          // b={b}
          // likeIndex={likeIndex}
          // setLikeIndex={setLikeIndex}
        />
      ) : (
        ""
      )} */}

      <MainTab
        data={data}
        optionBox={optionBox}
        size={size}
        optionTotal={optionTotal}
        optionFn={optionFn}
        likeHartHandler={likeHartHandler}
        like={like}
        // onClickLike={onClickLike}
        // b={b}
        // likeIndex={likeIndex}
        // setLikeIndex={setLikeIndex}
      />
    </S.MainWrapper>
  )
}
