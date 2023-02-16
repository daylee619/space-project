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
    <div style={{ marginTop: "100px" }}>
      <S.EventTitleWrapper>
        <S.EventTitle>EVENT</S.EventTitle>
      </S.EventTitleWrapper>
      <div>
        <S.MenuList>
          <S.Menu>진행 이벤트</S.Menu>
          <S.Menu>종료 이벤트</S.Menu>
        </S.MenuList>
      </div>

      <div
        style={{
          padding: " 0 5%",
        }}
      >
        {data.map((el) => (
          <div
            key={el.id}
            style={{
              width: "100%",
              margin: "0 aut0",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <S.EventItem
              key={el.id}
              onClick={async () => await router.push("/eventdetail")}
            >
              <img
                src={el.thumbnail}
                style={{
                  width: "550px",
                  height: "300px",
                  margin: "0 10px",
                }}
              />
              <S.ListSubMenu>{el.title}</S.ListSubMenu>
            </S.EventItem>

            <S.EventItem
              key={el.id}
              style={{
                display: "flex",
                flexDirection: "column",
                // width: "30%",
              }}
              onClick={async () => await router.push("/eventdetail")}
            >
              <img
                src={el.thumbnail}
                style={{ width: "550px", height: "300px", margin: "0 10px" }}
              />
              <S.ListSubMenu>{el.title}</S.ListSubMenu>
            </S.EventItem>
            <S.EventItem
              key={el.id}
              style={{
                display: "flex",
                flexDirection: "column",
                // width: "30%",
              }}
              onClick={async () => await router.push("/eventdetail")}
            >
              <img
                src={el.thumbnail}
                style={{ width: "550px", height: "300px", margin: "0 10px" }}
              />
              <S.ListSubMenu>{el.title}</S.ListSubMenu>
            </S.EventItem>
          </div>
        ))}
      </div>
    </div>
  )
}
