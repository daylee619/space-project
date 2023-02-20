import * as S from "./MainWeeklyBest.styles"
import axios from "axios"
import { useEffect, useState } from "react"
import { API_IP } from "../../../../common/utils/ApiIp"
// import ProductItem from "src/common/libraries/productItem/ProductItem.tsx"
import MainTab from "../../mainTab/MainTab"
import { IWeeklyBest } from "./MainWeeklyBest.types"
export default function MainWeeklyBest() {
  const [data, setData] = useState<IWeeklyBest>()
  const [like, setLike] = useState<number[]>([])
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
  const [tab, setTab] = useState<number>()

  const optionBox: string[] = []
  const size: string[] = []
  const optionTotal = []
  // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
  const optionFn = data?.weeklyBest?.forEach((el) =>
    el.stockCheck?.map((item) => {
      optionBox.push(`(${item.colorId})${item.colorName} / Size : `)
      item?.opt?.forEach((element) => size.push(element.sizeName))
    })
  )
  for (let i = 0; i < optionBox.length; i++) {
    optionTotal.push(optionBox[i] + size[i])
  }

  return (
    <S.MainWrapper>
      <S.WeeklyBestTitle>Weekly Best</S.WeeklyBestTitle>
      <div>
        {data?.categories?.map((el, idx) => (
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

      <MainTab
        data={data}
        optionTotal={optionTotal}
        likeHartHandler={likeHartHandler}
        like={like}
      />
    </S.MainWrapper>
  )
}
