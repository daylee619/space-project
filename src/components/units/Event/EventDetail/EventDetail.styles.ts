import styled from "@emotion/styled"
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
    <div style={{ marginTop: "100px", marginBottom: "100px" }}>
      <EventTitleWrapper>
        <EventMenuTitle>EVENT</EventMenuTitle>
      </EventTitleWrapper>
      <div>
        <MenuList>
          <Menu>진행 이벤트</Menu>
          <Menu>종료 이벤트</Menu>
        </MenuList>
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
            <EventTitle>{el.title}</EventTitle>
            <EventContent>{el.content}</EventContent>
          </div>
        ))}
      </div>
    </div>
  )
}

export const EventTitleWrapper = styled.div`
  min-height: 30px;
  margin: 25px 0 25px;
  border-bottom: 0;
  text-align: center;
`
export const EventMenuTitle = styled.p`
  padding: 0;
  color: #1a1a1a;
  font-size: 40px;
  font-weight: 500;
`
export const MenuList = styled.ul`
  padding: 0;
  margin: 30px auto 60px;
  border: 0;
  text-align: center;
  cursor: pointer;
`
export const EventDetailImg = styled.div`
  background-size: cover;
  width: 100%;
  height: 100vh;
`
export const Menu = styled.li`
  display: inline-block;
  width: auto;
  margin: 0 20px;
  padding: 0;
  font-size: 18px;
  vertical-align: top;
  height: 32px;
  line-height: 32px;
`

export const EventDetailWrapper = styled.div``

export const EventTitle = styled.div`
  font-size: 50px;
  height: 100px;
  line-height: 100px;
  font-weight: 900;
  padding-bottom: 10px;
  text-align: center;
  color: #fff;
  padding-top: 20px;
`
export const EventContent = styled.div`
  font-size: 24px;
  height: 52px;
  line-height: 52px;
  font-family: "Roboto", "Noto Sans KR", Verdana, AppleGothic, sans-serif;
  font-weight: 600;
  padding-bottom: 30px;
  text-align: center;
  color: #fff;
`
