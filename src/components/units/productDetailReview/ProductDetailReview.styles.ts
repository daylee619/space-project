import styled from "@emotion/styled"

export const ReviewTitle = styled.div`
  flex-grow: 1;
  line-height: 30px;
  font-size: 20px;
  color: #14161a;
  font-weight: bold;
  margin-left: 10px;
`
export const TopWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid #14161a;
  padding: 16px 0;
  width: 100%;
  font-size: 12px;
`
export const TopWrapperRight = styled.div`
  display: flex;
`
export const AllReview = styled.div`
  white-space: nowrap;
  font-size: 14px;
  color: #707680;
  padding: 0 12px 16px;
`
export const Notice = styled.span`
  white-space: nowrap;
  font-size: 14px;
  color: #707680;
  padding: 0 12px 16px;
  span {
    font-weight: bold;
  }
`
export const StarAverage = styled.div`
  margin-left: 4px;
  font-size: 28px;
  font-weight: bold;
  line-height: 72px;
  color: #14161a;
  vertical-align: bottom;
`
export const AverBox = styled.div`
  display: flex;
  justify-content: center;
`
export const ConsumerLike = styled.div`
  margin-top: 8px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #14161a;
  span {
    font-weight: bold;
  }
`
export const ConsumerAvg = styled.div`
  width: 399px;
  min-height: 122px;
  border-right: solid 1px #d8dde5;
  padding: 30px 0;
  font-size: 0;
`
export const PhotoVideoWrapper = styled.div`
  padding: 32px 0;
  border-top: 1px solid #ebeff5;
  border-bottom: 1px solid #ebeff5;
`
export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Photo = styled.div`
  font-size: 12px;
  line-height: 24px;
  vertical-align: middle;
  text-align: left;
  color: #14161a;
  margin-left: 10px;
`
export const AllPhoto = styled.div`
  cursor: pointer;
  font-size: 12px;
  line-height: 20px;
  padding: 14px 0 14px 14px;

  color: #707680;
`
export const ImgBox = styled.div`
  margin: 0 10px;
`
export const ImgFirst = styled.img`
  width: 160px;
  height: 180px;
  object-fit: cover;
  margin-right: 10px;
`
export const ImgSecond = styled.img`
  width: 160px;
  height: 180px;
  object-fit: cover;
`
export const ReviewMenuWrapper = styled.div`
  border-bottom: 1px solid #ebeff5;
  display: flex;
  position: relative;
`

export const OptionBtnContainer = styled.div`
  position: relative;
  border-bottom: 1px solid #ebeff5;
  padding: 12px 4px;
`
export const StarOptionBtn = styled.button`
  border-color: #14161a;
  border-radius: 4px;
  border: solid 1px #ebeff5;
  background-color: #ffffff;

  margin-left: 10px;
  &:clicked {
    outline: none;
  }
`

export const StarOptionClick = styled.div`
  padding: 8px 12px;
`

export const ReviewMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 10px;
`
export const ReviewMenuList = styled.li`
  cursor: pointer;

  padding: 22px 12px;
  font-size: 14px;
  line-height: 20px;
  color: #bcc2cc;

  &:hover {
    color: #14161a;
    font-weight: bold;
  }
`
export const ReviewSearchWrapper = styled.div`
  display: flex;
  position: relative;
  height: 32px;
  width: 238px;
  border: solid 1px #d8dde5;
  border-radius: 4px;
  left: 600px;
`

export const ReviewSearch = styled.input`
  font-size: 12px;
  color: #14161a;
  line-height: 18px;
  border: none;
  margin: 6px 8px 6px 32px;
  text-overflow: ellipsis;
  outline: none;
`
export const SearchBtn = styled.button`
  position: absolute;
  border-radius: 5px;
  background-color: transparent;
  padding: 6px;
  margin: 1px;
  right: 10px;
  border: none;
  top: 4px;
  cursor: pointer;
`
export const ReviewContainer = styled.div`
  padding: 32px 0;
  border-bottom: 1px solid #d8dde5;
`

export const GoodComment = styled.div`
  margin-top: 5px;
`
export const HelpWrapper = styled.div`
  display: flex;
  margin-right: 4px;
  color: #707680;
`

export const Helpful = styled.span`
  margin: 0 4px;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  color: #707680;
`
export const DisHelp = styled.span`
  margin: 0 4px;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  color: #707680;
`
export const HelpContainer = styled.div`
  padding: 16px 0 16px 4px;
  text-decoration: none;
  cursor: pointer;
  color: #707680;
`

export const DisHelpContainer = styled.div`
  padding: 16px 0 16px 4px;
  text-decoration: none;
  cursor: pointer;
  color: #707680;
`
export const CommentBox = styled.div`
  padding-left: 8px;
  padding: 16px 16px 16px 0;
  color: #707680;
`
export const Commnet = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: #707680;
  cursor: pointer;
`
export const CommentCount = styled.span`
  margin-left: 4px;
  margin-right: 4px;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  color: #707680;
  cursor: pointer;
`
