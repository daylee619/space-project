import styled from "@emotion/styled"

export default function ShareModal(props) {
  // const { isModal, setIsModal, ModalHandler } = props
  return (
    <>
      <div>
        {props.isModal ? (
          <ShareModalBox>
            <ShareTop>
              <div> 공유하기</div>

              <ShareBtn onClick={props.close}>
                <ShareImg src="https://spao.com/morenvyimg/top_search_close.png" />
              </ShareBtn>
            </ShareTop>
            <IconWrapper>
              <img src="https://spao.com/web/upload/14831880685f0ff18b9bbd6.gif" />
              <img src="https://spao.com/web/upload/9867773015f0ff18b9bb1c.gif" />
              <img src="https://spao.com/morenvyimg/icon_sns_ka.png" />
              <img src="https://spao.com/morenvyimg/icon_sns_url.png" />
            </IconWrapper>
          </ShareModalBox>
        ) : null}
      </div>
    </>
  )
}

export const ShareModalBox = styled.div`
  z-index: 9999;
  position: fixed;
  top: 160px;
  left: 471px;
  border: 1px solid #e5e5e5;
  background-color: white;
  opacity: 1;
  padding: 20px;
`
export const ShareTop = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: center;

  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  padding-bottom: 20px;
  width: 300px;

  div {
    margin-left: 110px;
  }
`

export const ShareBtn = styled.button`
  width: 30px;
  background-color: #fff;
  border: none;
  cursor: pointer;
`
export const ShareImg = styled.img`
  display: flex;
  width: 15px;
  cursor: pointer;
`
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-top: 10px;
  margin-left: 25px;
  img {
    width: 45px;
    display: flex;
    margin: 10px;
  }
`
