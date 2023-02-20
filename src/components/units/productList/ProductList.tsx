/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import axios from "axios"
import { HeartOutlined, HeartFilled } from "@ant-design/icons"
import React, { useEffect, useState } from "react"
import ProductItem from "../../../common/libraries/productItem/ProductItem"
import * as S from "./ProductList.styles"
import { Pagination } from "antd"
import { useRouter } from "next/router"
import { API_IP } from "../../../common/utils/ApiIp"
import { IResultType, IColorType } from "./ProductList.types"
export default function ProductList() {
  const [data, setData] = useState<IResultType[]>([])
  const [pagination, setPagination] = useState(1)
  const [message, setMessage] = useState("")
  const [CountList, setCountList] = useState()

  // title State
  const [title, setTitle] = useState("")

  const router = useRouter()
  console.log(router.query.url_query)
  const URL = router.query.url_query
  const URL_HANDLER = URL?.split("&") ?? []
  const MAIN_CATEGORY = URL_HANDLER[0]?.split("=") ?? ""
  const COLOR = URL_HANDLER[1]?.split("=") ?? ""
  const ITEM = URL_HANDLER[2]?.split("=") ?? ""
  const SORT = URL_HANDLER[3]?.split("=") ?? ""
  const SUB = URL_HANDLER[4]?.split("=") ?? ""
  const SEARCH = URL_HANDLER[5]?.split("=") ?? ""

  // title handler function
  const titleHandler = () => {
    if (MAIN_CATEGORY[1] === "1") {
      setTitle("ALL")
    }
    if (MAIN_CATEGORY[1] === "2") {
      setTitle("WOMEN")
    }
    if (MAIN_CATEGORY[1] === "3") {
      setTitle("MEN")
    }
    if (MAIN_CATEGORY[1] === "4") {
      setTitle("KIDS")
    }
  }

  useEffect(() => {
    axios
      .get(
        `http://${API_IP}:3000/product/list?offset=${pagination}&mainCategory=${
          MAIN_CATEGORY[1] ? MAIN_CATEGORY[1] : ""
        }&color=${COLOR[1] ? COLOR[1] : ""}&item=${
          ITEM[1] ? ITEM[1] : ""
        }&sort=${SORT[1] ? SORT[1] : null}&subCategory=${
          SUB[1] ? SUB[1] : ""
        }&name=${SEARCH[1] ? SEARCH[1] : ""}`,
        {
          headers: {
            authorization: localStorage.getItem("access_token"),
          },
        }
      )
      .then((res) => {
        console.log("response : ", res)
        setData(res.data.result)
        setCountList(res.data.productsCountList)
      })
      .catch((error) => {
        console.log(error)
      })
    titleHandler()
  }, [URL, pagination, message])

  // useEffect(() => {
  //   axios.get("/data/prolist.json").then((res) => {
  //     setData(res.data.result)
  //   })
  // }, [])

  // useEffect(() => {
  //   axios
  //     .get("http://172.30.1.47:3000/product/list?offset=1&sort=best")
  //     .then((res) => {
  //       setData(res.data.result)
  //     })
  // }, [])

  // const getData = async () => {
  //   try {
  //     axios
  //       .get(`http://172.16.100.78:3000/product/list?offset=1&user=1`)
  //       .then((res) => {
  //         console.log(res)
  //         setData(res.data.result)
  //       })
  //   } catch (error) {
  //     console.log(error)
  //   }

  // const [countIndex, setCountIndex] = useState()
  // const handleOnClick = (e, idx) => {
  //   setCountIndex(idx)
  // }

  // const [wish, setWish] = useState([])

  const wishHandler = async (id: number, productId: number) => {
    try {
      if (!wish.includes(productId)) {
        setMessage("")
        setWish(wish.concat(productId))
        await axios
          .post(
            `http://${API_IP}:3000/like`,
            {
              productId: id,
            },
            {
              headers: {
                authorization: `${localStorage.getItem("access_token")}`,
              },
            }
          )
          .then((res) => {
            const { data } = res
            if (data) {
              setMessage(data)
            }
          })
      }
      if (wish.includes(productId)) {
        setMessage("")
        setWish(wish.filter((el) => productId !== el))
        await axios
          .post(
            `http://${API_IP}:3000/like`,
            {
              productId: id,
            },
            {
              headers: {
                authorization: `${localStorage.getItem("access_token")}`,
              },
            }
          )
          .then((res) => {
            const { data } = res
            if (data.message) {
              console.log(data.message)
              setMessage(data.message)
            }
          })
      }
    } catch (error) {
      console.log(error)
    }
  }

  // menu option function[]

  const optionBox = []
  const size: number[] = []
  const optionTotal = []
  const optionFn = data?.forEach((el) =>
    el.color.map((item: { colorId: any; colorName: any; size: any[] }) => {
      optionBox.push(`(${item.colorId})${item.colorName} / Size : `)
      item?.size?.forEach((element) => size.push(element.sizeName))
    })
  )
  for (let i = 0; i < optionBox.length; i++) {
    optionTotal.push(optionBox[i] + size[i])
  }

  return (
    <S.ProductListWrapper>
      <S.ProductListBox>
        <S.MenuTitle>{title}</S.MenuTitle>
        <S.Category>
          <S.MenuCategoryBox>
            <S.MenuCategoryList
              onClick={async () =>
                await router.push(
                  `/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${
                    COLOR[1]
                  }&item=${ITEM[1]}&sort=${`new`}&subCategory=${SUB[1]}&name=${
                    SEARCH[1]
                  }`
                )
              }
            >
              신상품
            </S.MenuCategoryList>
            <S.MenuCategoryList
              onClick={async () =>
                await router.push(
                  `/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${
                    COLOR[1]
                  }&item=${ITEM[1]}&sort=${`name`}&subCategory=${SUB[1]}&name=${
                    SEARCH[1]
                  }`
                )
              }
            >
              상품명
            </S.MenuCategoryList>
            <S.MenuCategoryList
              onClick={async () =>
                await router.push(
                  `/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${
                    COLOR[1]
                  }&item=${ITEM[1]}&sort=${`low`}&subCategory=${SUB[1]}&name=${
                    SEARCH[1]
                  }`
                )
              }
            >
              낮은가격
            </S.MenuCategoryList>
            <S.MenuCategoryList
              onClick={async () =>
                await router.push(
                  `/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${
                    COLOR[1]
                  }&item=${ITEM[1]}&sort=${`high`}&subCategory=${SUB[1]}&name=${
                    SEARCH[1]
                  }`
                )
              }
            >
              높은가격
            </S.MenuCategoryList>
            <S.MenuCategoryList
              onClick={async () =>
                await router.push(
                  `/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${
                    COLOR[1]
                  }&item=${ITEM[1]}&sort=${`best`}&subCategory=${SUB[1]}&name=${
                    SEARCH[1]
                  }`
                )
              }
            >
              인기상품
            </S.MenuCategoryList>
            <S.MenuCategoryList
              onClick={async () =>
                await router.push(
                  `/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${
                    COLOR[1]
                  }&item=${ITEM[1]}&sort=${`review`}&subCategory=${
                    SUB[1]
                  }&name=${SEARCH[1]}`
                )
              }
            >
              사용후기
            </S.MenuCategoryList>
            <S.MenuCategoryList
              onClick={async () =>
                await router.push(
                  `/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${
                    COLOR[1]
                  }&item=${ITEM[1]}&sort=${`like`}&subCategory=${SUB[1]}&name=${
                    SEARCH[1]
                  }`
                )
              }
            >
              좋아요
            </S.MenuCategoryList>
          </S.MenuCategoryBox>
          <S.ItemNumber>{data.length} Items</S.ItemNumber>
        </S.Category>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "980px",
            flexWrap: "wrap",
          }}
        >
          {data.map((el, idx) => (
            <div
              key={el.id}
              style={{ margin: "10px" }}
            >
              <ProductItem
                imgWidth="280px"
                imgHeight="400px"
                menuWidth="200px"
                bottom="403px"
                imgUrl={el.thumbnail}
                data={optionTotal}
                productId={el.id}
              />
              <S.ItemDescription>
                <S.ItemTitle>
                  <S.ItemName>{el.name}</S.ItemName>
                  <S.HeartButton
                    onClick={async () => {
                      await wishHandler(el.id, el.productId)
                    }}
                  >
                    {el.likeId?.length > 0 ? (
                      <HeartFilled style={{ color: "red" }} />
                    ) : (
                      <HeartOutlined />
                    )}
                  </S.HeartButton>
                </S.ItemTitle>

                <S.ItemPrice>{el.price}</S.ItemPrice>
                <S.ColorDisplay>
                  {el.color?.map((el: IColorType) => (
                    <S.Color
                      color={el.colorName}
                      key={el.colorId}
                    ></S.Color>
                  ))}
                </S.ColorDisplay>

                <S.Review key={el.id}>
                  {el.reviewCount === null
                    ? "리뷰 0건"
                    : `리뷰 ${el.reviewCount}건`}
                </S.Review>
              </S.ItemDescription>
            </div>
          ))}
        </div>
      </S.ProductListBox>

      <Pagination
        defaultCurrent={1}
        total={CountList?.count}
        style={{
          marginBottom: "80px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
        onChange={(num) => {
          setPagination(num)
        }}
      />
    </S.ProductListWrapper>
  )
}
