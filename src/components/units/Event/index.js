import styled from "@emotion/styled"
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
      <EventTitleWrapper>
        <EventTitle>EVENT</EventTitle>
      </EventTitleWrapper>
      <div>
        <MenuList>
          <Menu>진행 이벤트</Menu>
          <Menu>종료 이벤트</Menu>
        </MenuList>
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
            <EventItem
              key={el.id}
              onClick={() => router.push("/eventdetail")}
            >
              <img
                src={el.thumbnail}
                style={{
                  width: "550px",
                  height: "300px",
                  margin: "0 10px",
                }}
              />
              <ListSubMenu>{el.title}</ListSubMenu>
            </EventItem>

            <EventItem
              key={el.id}
              style={{
                display: "flex",
                flexDirection: "column",
                // width: "30%",
              }}
              onClick={() => router.push("/eventdetail")}
            >
              <img
                src={el.thumbnail}
                style={{ width: "550px", height: "300px", margin: "0 10px" }}
              />
              <ListSubMenu>{el.title}</ListSubMenu>
            </EventItem>
            <EventItem
              key={el.id}
              style={{
                display: "flex",
                flexDirection: "column",
                // width: "30%",
              }}
              onClick={() => router.push("/eventdetail")}
            >
              <img
                src={el.thumbnail}
                style={{ width: "550px", height: "300px", margin: "0 10px" }}
              />
              <ListSubMenu>{el.title}</ListSubMenu>
            </EventItem>
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
export const EventTitle = styled.p`
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
export const ListSubMenu = styled.div`
  font-size: 15px;
  margin-top: 25px;
  text-align: center;
`
export const EventItem = styled.div`
  margin: 20px 0.5% 60px 0.5%;
  text-align: center;
  float: left;
  cursor: pointer;

  img {
    &:hover {
      opacity: 0.5;
      transition: all 0.3s;
    }
  }
`
