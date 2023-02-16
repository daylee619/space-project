import * as S from "./EventDetail.styles"
import axios from "axios"

import { useEffect, useState } from "react"

export default function EventDetail() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("/data/eventDetail.json").then((res) => {
      setData(res.data)
      //   console.log(data)
    })
  }, [])

  return (
    <div style={{ marginTop: "100px" }}>
      <S.EventTitleWrapper>
        <S.EventMenuTitle>EVENT</S.EventMenuTitle>
      </S.EventTitleWrapper>
      <div>
        <S.MenuList>
          <S.Menu>진행 이벤트</S.Menu>
          <S.Menu>종료 이벤트</S.Menu>
        </S.MenuList>
      </div>
      <div>
        {data.map((el) => (
          <div
            key={el.id}
            style={{
              backgroundImage: `url(${el.thumbnail})`,
              backgroundSize: "cover",
              width: "100%",
              height: "100vh",
            }}
          >
            <S.EventTitle>{el.title}</S.EventTitle>
            <S.EventContent>{el.content}</S.EventContent>
          </div>
        ))}
      </div>
    </div>
  )
}
