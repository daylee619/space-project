import styled from "@emotion/styled"
export const Contain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 15px;
  border-bottom: 1px solid lightgray;
`

export const ReviewBox = styled.div`
  width: 80%;
  padding: 20px;
`

export const StarDateBox = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Star = styled.div``

export const Date = styled.div`
  color: #707680;
  padding: 1px 0;
  font-size: 12px;
  line-height: 18px;
`

export const Content = styled.div`
  margin: 15px 0;
  cursor: pointer;
  font-size: 13px;
  line-height: 18px;
  color: #14161a;
`

export const ImgBox = styled.div`
  display: flex;
  margin-bottom: 15px;
  cursor: pointer;
  img {
    &:hover {
      opacity: 0.5;
    }
  }
`

export const Img = styled.img`
  width: 160px;
  height: 180px;
  margin-right: 10px;
  object-fit: cover;
`

export const HelpBox = styled.div`
  display: flex;
`

export const Helpful = styled.div`
  margin-right: 10px;
  color: #707680;
  font-size: 12px;
  &:hover {
    cursor: pointer;
    color: #14161a;
    font-weight: bold;
  }
`

export const UnHelpful = styled.div`
  color: #707680;
  font-size: 12px;
  &:hover {
    cursor: pointer;
    color: #14161a;
    font-weight: bold;
  }
`

export const WhoReivewBox = styled.div`
  padding: 20px;
  border-left: 1px solid lightgray;
`

export const NickName = styled.div`
  margin-bottom: 4px;
  color: #14161a;
  overflow: hidden;

  font-size: 12px;
  line-height: 18px;

  span {
    font-weight: bold;
    color: #14161a;
  }
`
