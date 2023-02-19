import { CloseOutlined } from "@ant-design/icons"
import * as S from "./WishModal.styles"
import { useRouter } from "next/router"
import { IWishModalProps } from "./WishModal.types"
export default function WishModal(props: IWishModalProps) {
  const router = useRouter()

  return (
    <>
      <S.WishWrapper>
        {props.isWishModal && (
          <div>
            <S.TitleWrapper>
              <S.WishModalTitle>관심상품 담기</S.WishModalTitle>
              <div>
                <CloseOutlined
                  onClick={props.close}
                  style={{ fontSize: "20px" }}
                />
              </div>
            </S.TitleWrapper>
            <S.WishProductCheckWrapper>
              <p>
                <strong style={{ color: "#008bcc", fontWeight: "bold" }}>
                  선택하신 상품
                </strong>
                을
                <strong style={{ color: "#008bcc", fontWeight: "bold" }}>
                  &nbsp;관심상품
                </strong>
                에 담았습니다.
              </p>
              <div>지금 관심상품을 확인하시겠습니까?</div>
            </S.WishProductCheckWrapper>
            <S.CheckWrapper>
              <S.ContinueShopping onClick={props.close}>
                쇼핑 계속하기
              </S.ContinueShopping>
              <S.CheckWishProduct
                onClick={async () => await router.push("/mypage/wish-list")}
              >
                관심상품 확인
              </S.CheckWishProduct>
            </S.CheckWrapper>
          </div>
        )}
      </S.WishWrapper>
    </>
  )
}
