import * as S from "../cartmodal/cartmodal.styles"
import { CloseOutlined } from "@ant-design/icons"
import { useRouter } from "next/router"
import { ICartModalProps } from "../cartmodal/CartModal.types"
export default function CartModal(props: ICartModalProps) {
  const router = useRouter()

  return (
    <S.ModalWrapper>
      <S.ModalTop>
        <S.ModalTopTitle>장바구니 담기</S.ModalTopTitle>
        <div>
          <CloseOutlined onClick={props.close} />
        </div>
      </S.ModalTop>
      <S.ModalMiddle>
        <S.LogoImg src={"/images/spaceLogo.jpeg"} />

        <S.ModalMiddleContent>
          장바구니에 상품이 정상적으로 담겼습니다.
        </S.ModalMiddleContent>
      </S.ModalMiddle>
      <S.ModalBtnWrapper>
        <S.MoveToCart onClick={async () => await router.push("/cart")}>
          장바구니 이동
        </S.MoveToCart>
        <S.ShoppingContinue onClick={props.close}>
          쇼핑계속하기
        </S.ShoppingContinue>
      </S.ModalBtnWrapper>
    </S.ModalWrapper>
  )
}
