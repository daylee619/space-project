import * as S from "./cartmodal.styles"
import { CloseOutlined } from "@ant-design/icons"
export default function CartModal(props) {
  return (
    <S.ModalWrapper>
      <S.ModalTop>
        <S.ModalTopTitle>장바구니 담기</S.ModalTopTitle>
        <div>
          <CloseOutlined onClick={props.close} />
        </div>
      </S.ModalTop>
      <S.ModalMiddle>
        <img src="https://spao.com/morenvyimg/top_logo_pc.png" />
        {/* <S.SpaceTitle>SPACE</S.SpaceTitle> */}
        <S.ModalMiddleContent>
          장바구니에 상품이 정상적으로 담겼습니다.
        </S.ModalMiddleContent>
      </S.ModalMiddle>
      <S.ModalBtnWrapper>
        <S.MoveToCart>장바구니 이동</S.MoveToCart>
        <S.ShoppingContinue>쇼핑계속하기</S.ShoppingContinue>
      </S.ModalBtnWrapper>
    </S.ModalWrapper>
  )
}
