import styled from "@emotion/styled"
export const EventPageWrapper = styled.div`
  margin-top: 100px;
`
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
export const EventImgWrapper = styled.div`
  padding: 0 5%;
`
export const EventImgBox = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const EventItem = styled.div`
  margin: 20px 0.5% 60px 0.5%;
  text-align: center;
  float: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  img {
    &:hover {
      opacity: 0.5;
      transition: all 0.3s;
    }
  }
`
export const EventImg = styled.img`
  width: 550px;
  height: 300px;
  margin: 0 10px;
`
