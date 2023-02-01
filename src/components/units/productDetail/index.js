import styled from "@emotion/styled"
import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { ShareAltOutlined, HeartOutlined } from "@ant-design/icons"
import ShareModal from "../Modal/sharemodal"
import ShippingModal from "../Modal/shippingmodal"
import RefundModal from "../Modal/refundmodal"

const ProductDetail = () => {
  const [data, setData] = useState([])
  const [isShareModal, setIsShareModal] = useState(false)
  const [isShippingModal, setIsShippingModal] = useState(false)
  const [isRefundModal, setIsRefundModal] = useState(false)
  const [isMoreView, setIsMoreView] = useState(false)
  // const [colorBox, setColorBox] = useState([])
  // const [isColor, setIsColor] = useState(false)

  useEffect(() => {
    axios.get("/data/re.json").then((res) => {
      setData(res.data)
    })
  }, [])

  const [colorCheck, setColorCheck] = useState([])
  console.log(colorCheck)
  const changeHandler = (checked, colorId) => {
    if (!checked) {
      setColorCheck((prv) => [...prv, colorId])
    }
    if (checked) {
      setColorCheck(colorCheck.filter((el) => el !== colorId))
    }
  }

  const onClickImgMoreViewBtn = () => {
    setIsMoreView(!isMoreView)
  }

  const openShareModal = () => {
    setIsShareModal(true)
  }

  const closeShareModal = () => {
    setIsShareModal(false)
  }

  const openShippingModal = () => {
    setIsShippingModal(true)
  }
  const closeShippingModal = () => {
    setIsShippingModal(false)
  }

  const openRefundModal = () => {
    setIsRefundModal(true)
  }
  const closeRefundModal = () => {
    setIsRefundModal(false)
  }

  return (
    <div>
      <DetailWrapper>
        <DetailImg>
          <Thumbnail
            src={data.thumbnail}
            alt={data.thumbnail}
          />
          <ProductImgDetailBox>
            <ProductImgDetailName>{data.name}</ProductImgDetailName>
            <DetailThumbnail
              src={data.thumbnail}
              alt={data.thumbnail}
            />

            <ImgWrapper isMoreView={isMoreView}>
              {data.productImages?.map((el) => (
                <ProductImgDetail
                  src={el.image}
                  alt={el.image}
                  key={el.imageId}
                />
              ))}
              <ProductInfoWrite src="/images/productinfo.jpg" />
              <WashCareWrite src="/images/washandcare.jpg" />
            </ImgWrapper>
            <MoreViewBtnWrapper isMoreView={isMoreView}>
              <MoreViewBtn onClick={onClickImgMoreViewBtn}>
                {isMoreView ? "상품정보 접기" : "상품정보 더보기"}
              </MoreViewBtn>
            </MoreViewBtnWrapper>
          </ProductImgDetailBox>
          <SizeWrapper>
            <MyFitSizeTitle>MY FIT SIZE</MyFitSizeTitle>
            <SizeExplain src="/images/sizeexplain.jpg" />
            <SizeInfoImg src="/images/sizeinfo.jpg" />
          </SizeWrapper>
        </DetailImg>

        <DetailInfoWrappeer>
          <div>
            <ProductName>{data.name}</ProductName>
            <PriceBox>
              {data.price}
              <Share onClick={openShareModal}>
                <ShareAltOutlined />
              </Share>
              {isShareModal && (
                <ShareModal
                  isModal={isShareModal}
                  setIsModal={setIsShareModal}
                  open={openShareModal}
                  close={closeShareModal}
                />
              )}
            </PriceBox>
            <ReorderButtonBox>
              <ReorderButton>재입고 알림</ReorderButton>
            </ReorderButtonBox>
          </div>
          <CouponBox>
            <Coupon>신규가입 혜택</Coupon>
            <Coupon>신규 가입 시 웰컴 쿠폰백 즉시 지급</Coupon>
          </CouponBox>
          <div>
            <ColorTitle>Color</ColorTitle>
            <ColorButtonBox>
              {data.options?.map((el) => (
                <Fragment key={el.colorId}>
                  <ColorLabel htmlFor={el.colorId}>
                    {"(" + el.colorId + ")" + el.colorName}
                  </ColorLabel>
                  <ColorButton
                    type="checkbox"
                    id={el.colorId}
                    value={el.colorId}
                    disabled={
                      colorCheck.length === 1 &&
                      !colorCheck.includes(el.colorId)
                    }
                    // onClick={onClickSelectColor}
                    onChange={(e) =>
                      changeHandler(e.target.checked, el.colorId)
                    }
                  />
                </Fragment>
              ))}
            </ColorButtonBox>
            <OptionNotice>
              <p>[필수]</p> <span>옵션을 선택해주세요.</span>
            </OptionNotice>
          </div>
          <SizeBox>
            <SizeTitle>Size</SizeTitle>
            <div style={{ paddingTop: "10px" }}>
              {data.options?.map(
                (el) =>
                  colorCheck.includes(el.colorId) &&
                  el.options.map((a, i) => (
                    <Fragment key={i}>
                      <ColorLabel htmlFor={a.sizeId}>{a.size}</ColorLabel>
                      <SizeButton
                        type="checkbox"
                        id={a.sizeId}
                        key={a.i}
                      />
                    </Fragment>
                  ))
              )}
              {/* {data.options?.map((el, i) => {
                if (el.colorId === i) {
                  return data.options.map((el, i) =>
                    el.options?.map((el, i) => (
                      <button key={el.colorId}>{el.size[0]}</button>
                    ))
                  )
                }
              })} */}
            </div>
            <OptionNotice>
              <p>[필수]</p> <span>옵션을 선택해주세요.</span>
            </OptionNotice>
            <SizeRecommendBtn>사이즈를 추천합니다.</SizeRecommendBtn>
          </SizeBox>

          <PriceTotal>
            <PriceTotalTitle>총 상품금액</PriceTotalTitle>
            <PriceTotalNumber>0 (0개)</PriceTotalNumber>
          </PriceTotal>
          <BuyBtnBox>
            <LikeBtn>
              <HeartOutlined style={{ fontSize: "18px" }} />
            </LikeBtn>
            <CartBtn>장바구니</CartBtn>
            <BuyBtn>구매하기</BuyBtn>
          </BuyBtnBox>
          <ReviewButton>
            REVIEW EVENT <div>리뷰 작성 시 최대 10,000원 적립</div>
          </ReviewButton>
          <ExplainButtonBox>
            <SizeInfo>
              사이즈정보 * 상품정보 제공공시
              <img src="https://spao.com/morenvyimg/detail_arrow.png" />
            </SizeInfo>

            <ShippingeInfo onClick={openShippingModal}>
              배송안내
              <img src="https://spao.com/morenvyimg/detail_arrow.png" />
            </ShippingeInfo>
            {isShippingModal && (
              <ShippingModal
                isShippingModal={isShippingModal}
                setIsShippingModal={setIsShippingModal}
                open={openShippingModal}
                close={closeShippingModal}
              />
            )}
            <CancelInfo onClick={openRefundModal}>
              취소/반품/교환/환불 안내
              <img src="https://spao.com/morenvyimg/detail_arrow.png" />
            </CancelInfo>
            {isRefundModal && (
              <RefundModal
                isRefundModal={isRefundModal}
                setIsRefundModal={setIsRefundModal}
                open={openRefundModal}
                close={closeRefundModal}
              />
            )}
          </ExplainButtonBox>
        </DetailInfoWrappeer>
      </DetailWrapper>
    </div>
  )
}

export default ProductDetail

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  padding: 70px;
  position: absolute;
`

export const DetailImg = styled.div`
  /* display: flex; */

  width: 870px;
  max-width: 1005px;
  min-width: 870px;
  width: 80%;
  /* float: left; */
  flex-wrap: wrap;
  margin-left: 250px;
`
export const Thumbnail = styled.img`
  display: flex;
  width: 320px;
  margin: 20px;
  margin-left: 80px;
`

export const ProductImgDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`
export const DetailThumbnail = styled.img`
  width: 300px;
  margin-bottom: 30px;
`

export const ProductImgDetailName = styled.div`
  font-size: 22px;
  margin-top: 50px;
  margin-bottom: 30px;
`
export const ProductImgDetail = styled.img`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: 20px;
`
export const ProductInfoWrite = styled.img`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-top: 100px;
  /* margin-left: 170px; */
`
export const WashCareWrite = styled.img`
  display: flex;
  justify-content: center;
  width: 80%;
  /* margin-right: 120px; */
`

export const ImgWrapper = styled.div`
  max-height: ${(props) => (props.isMoreView ? "" : "10px")};
  overflow: hidden;
  margin-left: 300px;
`
export const MoreViewBtnWrapper = styled.div`
  position: relative;

  &::before {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100%;
    height: ${(props) => (props.isMoreView ? "" : "50px")};
    /* background: linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgb(255, 255, 255),
      90%
    ); */
    content: "";
  }
`
export const MoreViewBtn = styled.button`
  width: 250px;
  background-color: #fff;
  border: 1px solid #000;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`
export const SizeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const MyFitSizeTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 17px;
  margin-top: 30px;
`
export const SizeExplain = styled.img`
  display: flex;
  margin-top: 20px;
  margin-left: 200px;
  width: 55%;
`
export const SizeInfoImg = styled.img`
  display: flex;
  margin-left: 200px;
  width: 60%;
`
export const DetailInfoWrappeer = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  width: 270px;
  margin-right: 100px;
`
export const ProductName = styled.div`
  font-size: 18px;
  color: #1a1a1a;
  margin-bottom: 10px;
  padding-bottom: 20px;
  font-weight: 500;
  line-height: 30px;
`
export const Share = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ReorderButtonBox = styled.div`
  display: flex;
  padding: 15px 0;
`
export const CouponBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid #d5d5d5;
  border-bottom: 1px solid #d5d5d5;
`
export const Coupon = styled.div`
  font-size: 10px;
  color: #333;
`
export const ColorTitle = styled.div`
  font-size: 12px;
  padding-top: 24px;
`
export const ColorButtonBox = styled.div`
  display: flex;
  padding-top: 10px;
`
export const ColorButton = styled.input`
  display: none;
`
export const SizeButton = styled.input`
  display: none;
`

export const ColorLabel = styled.label`
  font-size: 10px;
  border: 1px solid #d5d5d5;
  background-color: transparent;
  padding: 6px 5px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    border: 1px solid #000;
  }

  &:focus {
    border: 1px solid #000;
  }
`
export const SizeLabel = styled.label`
  font-size: 10px;
  border: 1px solid #d5d5d5;
  background-color: transparent;
  padding: 6px 5px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    border: 1px solid #000;
  }

  &:focus {
    border: 1px solid #000;
  }
`
export const OptionNotice = styled.div`
  display: flex;
  color: #909090;
  font-size: 10px;
  margin-top: 20px;
`
export const ReorderButton = styled.button`
  font-size: 10px;
  border: 1px solid #d5d5d5;
  background-color: transparent;
  cursor: pointer;
`
export const SizeBox = styled.div`
  border-bottom: 1px solid #e5e5e5;
`
export const SizeTitle = styled.div`
  font-size: 12px;
  padding-top: 14px;
`
export const SizeRecommendBtn = styled.button`
  width: 270px;
  font-size: 11px;
  margin: 24px 0;
  padding: 8px 24px;
  background-color: transparent;
  border: 1px solid #e8e8e8;
  cursor: pointer;

  &:hover {
    background-color: #dedede;
  }
`

export const PriceTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 10px;
`
export const PriceTotalTitle = styled.div`
  font-size: 15px;
`
export const PriceTotalNumber = styled.div`
  font-size: 12px;
`
export const BuyBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`
export const LikeBtn = styled.button`
  border: 1px solid #c9c9c9;
  background-color: #fff;
  width: 48px;
  height: 48px;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
  }
`
export const CartBtn = styled.button`
  border: 1px solid #c9c9c9;
  background-color: #fff;
  width: 39.2%;
  height: 48px;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
  }
`
export const BuyBtn = styled.button`
  border: 1px solid #c9c9c9;
  color: #fff;
  background-color: #000;
  width: 39.2%;
  height: 48px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`
export const ReviewButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  width: 270px;
  height: 145px;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`

export const ExplainButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  margin-top: 30px;
  border-top: 1px solid #e5e5e5;
`
export const SizeInfo = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #e5e5e5;
  &:hover {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    /* transition: all 0.3s linear; */
  }
`

export const ShippingeInfo = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #e5e5e5;
  &:hover {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
`
export const CancelInfo = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #e5e5e5;
  &:hover {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
`
