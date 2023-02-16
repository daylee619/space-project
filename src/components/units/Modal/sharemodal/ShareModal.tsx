import * as S from "./ShareModal.styles"

export default function ShareModal(props) {
  // const { isModal, setIsModal, ModalHandler } = props
  return (
    <>
      <div>
        {props.isModal ? (
          <S.ShareModalBox>
            <S.ShareTop>
              <div> 공유하기</div>

              <S.ShareBtn onClick={props.close}>
                <S.ShareImg src="https://spao.com/morenvyimg/top_search_close.png" />
              </S.ShareBtn>
            </S.ShareTop>
            <S.IconWrapper>
              <img src="https://spao.com/web/upload/14831880685f0ff18b9bbd6.gif" />
              <img src="https://spao.com/web/upload/9867773015f0ff18b9bb1c.gif" />
              <img src="https://spao.com/morenvyimg/icon_sns_ka.png" />
              <img src="https://spao.com/morenvyimg/icon_sns_url.png" />
            </S.IconWrapper>
          </S.ShareModalBox>
        ) : null}
      </div>
    </>
  )
}
