import { CloseOutlined } from "@ant-design/icons"
import styled from "@emotion/styled"
import exp from "constants"

export default function WishModal(props) {
  return (
    <>
      <WishWrapper>
        {props.isWishModal && (
          <div>
            <TitleWrapper>
              <WishModalTitle>관심상품 담기</WishModalTitle>
              <div>
                <CloseOutlined
                  onClick={props.close}
                  style={{ fontSize: "20px" }}
                />
              </div>
            </TitleWrapper>
            <WishProductCheckWrapper>
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
            </WishProductCheckWrapper>
            <CheckWrapper>
              <ContinueShopping>쇼핑 계속하기</ContinueShopping>
              <CheckWishProduct>관심상품 확인</CheckWishProduct>
            </CheckWrapper>
          </div>
        )}
      </WishWrapper>
    </>
  )
}

export const WishWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  width: 350px;
  margin: -72px 0 0 -150px;
  border: 1px solid #757575;
  background: #fff;
`
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px 35px 7px 19px;
  color: #fff;
  background: #333;
`
export const WishModalTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
`
export const WishProductCheckWrapper = styled.div`
  text-align: center;
  padding: 25px;
  font-size: 15px;
  color: #353535;
`
export const CheckWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 9px;
  border-top: 1px solid #d7d5d5;
  text-align: center;
  background: #fbfafa;
`
export const ContinueShopping = styled.div`
  width: 96px;
  padding: 6px 8px;
  font-size: 15px;
  border: 1px solid #d1d1d1;
  line-height: 18px;
  font-weight: normal;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0;
  text-align: center;
  white-space: nowrap;
  color: #222;
  background-color: #fff;
  margin-right: 10px;
`
export const CheckWishProduct = styled.div`
  width: 96px;
  padding: 6px 8px;
  background-color: #1a1a1a;
  border: 1px solid transparent;
  line-height: 18px;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  color: #fff;
`
