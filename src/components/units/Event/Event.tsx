import * as S from "./Event.styles"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Event() {
  const [data, setData] = useState([])
  const router = useRouter()
  useEffect(() => {
    axios.get("/data/eventList.json").then((res) => {
      setData(res.data)
      console.log(data)
    })
  }, [])

  return (
    <S.EventPageWrapper>
      <S.EventTitleWrapper>
        <S.EventTitle>EVENT</S.EventTitle>
      </S.EventTitleWrapper>

      <S.MenuList>
        <S.Menu>진행 이벤트</S.Menu>
        <S.Menu>종료 이벤트</S.Menu>
      </S.MenuList>

      <S.EventImgWrapper>
        {data.map((el) => (
          <S.EventImgBox key={el.id}>
            <S.EventItem
              key={el.id}
              onClick={async () => await router.push("/eventdetail")}
            >
              <S.EventImg src={el.thumbnail} />
              <S.ListSubMenu>{el.title}</S.ListSubMenu>
            </S.EventItem>

            <S.EventItem
              key={el.id}
              onClick={async () => await router.push("/eventdetail")}
            >
              <S.EventImg src={el.thumbnail} />
              <S.ListSubMenu>{el.title}</S.ListSubMenu>
            </S.EventItem>
            <S.EventItem
              key={el.id}
              onClick={async () => await router.push("/eventdetail")}
            >
              <S.EventImg src={el.thumbnail} />
              <S.ListSubMenu>{el.title}</S.ListSubMenu>
            </S.EventItem>
          </S.EventImgBox>
        ))}
      </S.EventImgWrapper>
    </S.EventPageWrapper>
  )
}
