import styled from "@emotion/styled"
import axios from "axios"
import { useEffect, useState } from "react"
// import ProductItem from "src/common/libraries/productItem/ProductItem.tsx"
import MainTab from "../../mainTab"

export default function MainWeeklyBest() {
  const [data, setData] = useState([])
  const [like, setLike] = useState([])
  useEffect(() => {
    axios.get("http://172.16.101.103:3000/product/best").then((res) => {
      setData(res.data)
    })
  }, [])

  const likeHartHandler = async (id, isLike) => {
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
  const size = []
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
    <MainWrapper>
      <WeeklyBestTitle>Weekly Best</WeeklyBestTitle>
      <div>
        {data.categories?.map((el, idx) => (
          <WeeklyBestTab key={el.id}>
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
          </WeeklyBestTab>
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
    </MainWrapper>
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

export const MainWrapper = styled.div`
  width: 100%;
`
export const WeeklyBestTitle = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  margin: 60px auto 50px;
  font-weight: 700;
`
export const WeeklyBestTab = styled.ul`
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  li {
    float: left;
    margin-right: 30px;
    cursor: pointer;
    font-size: 20px;
    /* font-weight: 700; */
  }
`
export const WeeklyBestProduct = styled.div`
  display: table;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`
export const WeeklyBestProductItem = styled.div`
  margin: 10px;
  margin-top: 50px;
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
