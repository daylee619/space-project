import styled from "@emotion/styled"
import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import {
  ShareAltOutlined,
  HeartOutlined,
  HeartFilled,
  CloseOutlined,
} from "@ant-design/icons"
import ShareModal from "../Modal/sharemodal"
import ShippingModal from "../Modal/shippingmodal"
import RefundModal from "../Modal/refundmodal"
import WishModal from "../Modal/wishmodal"
import CartModal from "../Modal/cartmodal/cartmodal.tsx"
import { API_IP } from "../../../common/utils/ApiIp"
import { useRouter } from "next/router"

const ProductDetail = () => {
  const [data, setData] = useState([])
  console.log("detail : ", data)
  const [isShareModal, setIsShareModal] = useState(false)
  const [isShippingModal, setIsShippingModal] = useState(false)
  const [isRefundModal, setIsRefundModal] = useState(false)
  const [isMoreView, setIsMoreView] = useState(false)
  const [isWishModal, setIsWishModal] = useState(false)
  // const [option, setOption] = useState([])
  const [isCartModal, setIsCartModal] = useState(false)

  // product detail wish
  const [wishCheckMessage, setWishCheckMessage] = useState("")

  const router = useRouter()
  const productId = router.query?.productId

  useEffect(() => {
    if (productId !== undefined) {
      axios
        .get(`http://${API_IP}:3000/product/detail/${productId}`, {
          headers: {
            authorization: `${localStorage.getItem("access_token")}`,
          },
        })
        .then((res) => {
          const { data } = res
          if (data) {
            setData(data)
          }
        })
    }
  }, [productId, wishCheckMessage])
  // useEffect(() => {
  //   axios
  //     .get("http://172.30.1.47:3000/product/detail?user=1&productId=1")
  //     .then((res) => {
  //       setData(res.data)
  //     })
  // }, [])

  // Item Create State
  const [itemObject, setItemObject] = useState([])

  const [sumConut, setSumCount] = useState(0)

  //
  const [colorCheck, setColorCheck] = useState([])

  const [sizeCheck, setSizeCheck] = useState([])

  const changeHandler = (checked, colorId, colorName) => {
    if (!checked) {
      setColorCheck((prv) => [...prv, colorId])
      setColorIdState(colorId)
      setColorNameState(colorName)
      setColorIdState(colorId)
    }
    if (checked) {
      setColorCheck(colorCheck.filter((el) => el !== colorId))
      setColorNameState("")
    }
  }
  const [colorNameState, setColorNameState] = useState("")
  const [colorIdState, setColorIdState] = useState(0)
  const [sizeNameState, setSizeNameState] = useState("")

  const sizeHandler = (checked, sizeId, sizeName, optionId) => {
    if (!checked) {
      setSizeCheck((prev) => [...prev, sizeId])
      setSizeNameState(sizeName)
      const itemCreate = {
        count: 1,
        size_id: sizeId,
        size_name: sizeName,
        color_id: colorIdState,
        color_name: colorNameState,
        optionId,
      }
      if (
        itemObject.filter(
          (el) => el.size_id === sizeId && el.color_id === colorIdState
        ).length === 0
      ) {
        setItemObject((prev) => [...prev, itemCreate])
        setSumCount((prev) => prev + 1)
      } else {
        for (let i = 0; i < itemObject.length; i++) {
          if (
            itemObject[i].size_id === sizeId &&
            itemObject[i].color_id === colorIdState
          ) {
            itemObject[i].count++
          }
        }
        setSumCount((prev) => prev + 1)
      }
    }
    if (checked) {
      setSizeCheck(sizeCheck.filter((el) => el !== sizeId))
      setSizeNameState("")
    }
  }

  const soloCountHandler = (colorId, sizeId) => {
    setSumCount((prv) => prv + 1)
    for (let i = 0; i < itemObject.length; i++) {
      if (
        itemObject[i].size_id === sizeId &&
        itemObject[i].color_id === colorId
      ) {
        itemObject[i].count++
      }
    }
  }
  const soloMinusCountHandler = (colorId, sizeId) => {
    for (let i = 0; i < itemObject.length; i++) {
      if (
        itemObject[i].size_id === sizeId &&
        itemObject[i].color_id === colorId
      ) {
        if (itemObject[i].count > 1) {
          setSumCount((prv) => prv - 1)
          itemObject[i].count--
        }
      }
    }
  }

  const deleteItem = (index, sizeId, colorId) => {
    setItemObject(itemObject.filter((_, id) => id !== index))
    for (let i = 0; i < itemObject.length; i++) {
      if (
        itemObject[i].size_id === sizeId &&
        itemObject[i].color_id === colorId
      ) {
        setSumCount((prv) => prv - itemObject[i].count)
      }
    }
  }

  // const onClikcSumCount = (id, colorId, sizeId) => {
  //   setSumCount((prev) => prev + 1)
  //   for (let i = 0; i < itemObject.length; i++) {
  //     if (
  //       itemObject[i].size_id === sizeId &&
  //       itemObject[i].color_id === colorId
  //     ) {
  //       itemObject[i].count++
  //     }
  //   }
  // }

  const [wish, setWish] = useState([])

  // const wishHandler = async (id, likeid) => {
  //   try {
  //     if (!wish.includes(likeid)) {
  //       setWish(wish.concat(likeid))
  //       await axios.post(
  //         `http://${API_IP}:3000/like`,
  //         { productId: id, user: id },
  //         {
  //           Headers: {
  //             authorization: "token",
  //           },
  //         }
  //       )
  //     }
  //     if (wish.includes(likeid)) {
  //       setWish(wish.filter((el) => likeid !== el))
  //       await axios.post(
  //         `http://${API_IP}:3000/like`,
  //         { productId: id, user: id },
  //         { headers: { authorization: "token" } }
  //       )
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const wishHandler = async (productId) => {
    try {
      setWishCheckMessage("")
      await axios
        .post(
          `http://${API_IP}:3000/like`,
          {
            productId,
          },
          {
            headers: {
              authorization: localStorage.getItem("access_token"),
            },
          }
        )
        .then((res) => {
          const { data } = res
          if (data === "SUCCESS") {
            openWishModal()
            setWishCheckMessage(data)
          }
          if (data === "DELETE") {
            setWishCheckMessage(data)
          }
        })
    } catch (error) {
      console.log(error)
    }
  }

  // console.log(wish)

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

  const openWishModal = () => {
    setIsWishModal(true)
  }
  const closeWishModal = () => {
    setIsWishModal(false)
  }
  const openCartModal = () => {
    setIsCartModal(true)
  }
  const closeCartModal = () => {
    setIsCartModal(false)
  }

  const cartHandler = async () => {
    try {
      const settingOption = []
      for (let i = 0; i < itemObject.length; i++) {
        settingOption.push({
          optionId: itemObject[i].optionId,
          quantity: itemObject[i].count,
        })
      }
      if (itemObject.length !== 0) {
        await axios
          .post(
            `http://${API_IP}:3000/cart`,
            {
              cartItem: settingOption,
            },
            {
              headers: {
                authorization: `${localStorage.getItem("access_token")}`,
              },
            }
          )
          .then((res) => {
            const { data } = res
            if (data.message === "success") {
              openCartModal()
            }
          })
      } else {
        alert("필수 옵션을 선택해주세요.")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const orederHandler = () => {
    const optionId = []
    const quantity = []
    for (let i = 0; i < itemObject.length; i++) {
      optionId.push(itemObject[i].optionId)
      quantity.push(itemObject[i].count)
    }
    router.push(`/order/optionId=${optionId}&quantity=${quantity}&cartItem=`)
  }

  return (
    <Contain>
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
            <DescritionWrapper>
              <DescriptionTitle>Description</DescriptionTitle>
              <Description>{data.description}</Description>
            </DescritionWrapper>
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
                  <ColorLabel
                    htmlFor={el.colorId}
                    colorCheck={colorCheck}
                    cssId={el.colorId}
                  >
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
                    onChange={(e) => {
                      changeHandler(e.target.checked, el.colorId, el.colorName)
                    }}
                  />
                </Fragment>
              ))}
            </ColorButtonBox>
            <OptionNotice>
              <p>[필수]</p>
              {colorCheck.length === 0 ? (
                <span>옵션을 선택해주세요</span>
              ) : (
                data.options.map(
                  (el) =>
                    colorCheck.includes(el.colorId) && (
                      <span
                        key={el.colorId}
                      >{`(${el.colorId})${el.colorName}`}</span>
                    )
                )
              )}
            </OptionNotice>
          </div>
          <SizeBox>
            <SizeTitle>Size</SizeTitle>
            <div style={{ paddingTop: "10px" }}>
              {data.options?.map(
                (el) =>
                  colorCheck.includes(el.colorId) &&
                  el.options?.map((item, i) => (
                    <Fragment key={i}>
                      <SizeLabel
                        htmlFor={item.sizeId}
                        sizeCheck={sizeCheck}
                        cssId={item.sizeId}
                      >
                        {item.size}
                      </SizeLabel>
                      <SizeButton
                        type="checkbox"
                        id={item.sizeId}
                        key={item.i}
                        value={item.size}
                        onChange={(e) => {
                          sizeHandler(
                            e.target.checked,
                            item.sizeId,
                            item.size,
                            item.optionId
                          )
                        }}
                        disabled={
                          (sizeCheck.length === 1 &&
                            !sizeCheck.includes(item.sizeId)) ||
                          item.stock === 0
                        }
                      />
                    </Fragment>
                  ))
              )}
            </div>
            <OptionNotice>
              <p>[필수]</p>
              {sizeNameState ? (
                <span>{sizeNameState}</span>
              ) : (
                <span>옵션을 선택해주세요.</span>
              )}

              {/* {sizeCheck.length === 0 ? (
                <span>옵션을 선택해주세요.</span>
              ) : (
                data.options.map((el) =>
                  el.options?.map(
                    (element, i) =>
                      sizeCheck.includes(element.sizeId) && (
                        <div key={element.i}>{element.size}</div>
                      )
                  )
                )
              )} */}
            </OptionNotice>

            <SizeRecommendBtn>사이즈를 추천합니다.</SizeRecommendBtn>
          </SizeBox>
          {/* {itemObject.map((a) => (
            <div key={a.id}>
              <div key={a.id}>{a.size_id}</div>
              <div key={a.id}>
                {a.color_id}/{a.size_name}
              </div>
            </div>
          ))
          } */}

          {itemObject.map((el, index) => (
            <OrderBoxWrapper key={index}>
              <OptionOrderBox>
                <OrderName>{data.name}</OrderName>
                <OrderColoSize>
                  <span>{el.color_name}/</span>
                  <span>{el.size_name}</span>
                </OrderColoSize>
              </OptionOrderBox>

              <div>
                <MinusBtn
                  onClick={() => {
                    soloMinusCountHandler(el.color_id, el.size_id)
                  }}
                >
                  -
                </MinusBtn>
                <InputNumber
                  type="number"
                  value={el.count}
                />
                <PlusBtn
                  onClick={() => {
                    soloCountHandler(el.color_id, el.size_id)
                  }}
                >
                  +
                </PlusBtn>
              </div>

              <CloseBtn
                onClick={() => {
                  deleteItem(index, el.size_id, el.color_id)
                }}
              >
                <CloseOutlined
                  style={{
                    fontSize: "10px",
                    color: "lightGrey",
                    paddingBottom: "0px",
                  }}
                />
              </CloseBtn>
            </OrderBoxWrapper>
          ))}

          <PriceTotal>
            <PriceTotalTitle>총 상품금액</PriceTotalTitle>
            <PriceTotalNumber>
              {sumConut * data.price} ({sumConut}개)
            </PriceTotalNumber>
          </PriceTotal>
          <BuyBtnBox>
            <LikeBtn
              onClick={async () => {
                await wishHandler(data.id)
              }}
            >
              {(wishCheckMessage === "SUCCESS" || data.likeId) && (
                <HeartFilled style={{ color: "red", fontSize: "18px" }} />
              )}
              {(wishCheckMessage === "DELETE" || !data.likeId) && (
                <HeartOutlined style={{ fontSize: "18px" }} />
              )}
            </LikeBtn>
            {isWishModal && (
              <WishModal
                isWishModal={isWishModal}
                close={closeWishModal}
              />
            )}
            <CartBtn
              onClick={() => {
                cartHandler()
              }}
            >
              장바구니
            </CartBtn>
            {isCartModal && (
              <CartModal
                isCartModal={isCartModal}
                close={closeCartModal}
              />
            )}
            <BuyBtn onClick={orederHandler}>구매하기</BuyBtn>
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
    </Contain>
  )
}

export default ProductDetail

export const Contain = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  padding: 70px;
  /* position: absolute; */
`

export const DetailImg = styled.div`
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
export const DescritionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const DescriptionTitle = styled.div`
  font-size: 15px;

  color: #666666;
`

export const Description = styled.div`
  width: 100%;
  height: 100%;
  font-size: 12px;
  text-align: center;
  margin: 10px;

  color: #666666;
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
  /* border: 1px solid #d5d5d5; */
  border: ${(props) =>
    props.colorCheck?.includes(props.cssId)
      ? "1px solid black"
      : "1px solid #d5d5d5"};
  background-color: transparent;
  padding: 6px 5px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    border: 1px solid #000;
  }

  &:focus-within {
    border: 1px solid black;
  }
`
export const SizeLabel = styled.label`
  font-size: 10px;
  border: 1px solid #d5d5d5;
  background-color: transparent;
  padding: 6px 5px;
  margin-right: 10px;
  cursor: pointer;
  border: ${(props) =>
    props.sizeCheck?.includes(props.cssId)
      ? "1px solid black"
      : "1px solid #d5d5d5"};
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
export const OrderBoxWrapper = styled.div`
  border-top: 1px solid #9a9ba0;
  padding: 22px 0px;
  display: flex;
  position: relative;

  /* justify-content: space-around; */
`
export const OptionOrderBox = styled.div`
  padding: 0 10px 0 0;
`
export const MinusBtn = styled.button`
  background-color: transparent;
  border: 0;
  border-top: 1px solid #d4d8d9;
  border-left: 1px solid #d4d8d9;
  border-bottom: 1px solid #d4d8d9;
  cursor: pointer;
`
export const PlusBtn = styled.button`
  background-color: transparent;
  border: 0;
  border-top: 1px solid #d4d8d9;
  border-right: 1px solid #d4d8d9;
  border-bottom: 1px solid #d4d8d9;
  cursor: pointer;
`
export const CloseBtn = styled.div`
  position: absolute;
  top: 0;
  right: 3px;
  cursor: pointer;
`

export const InputNumber = styled.input`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  width: 30px;
  border: 0;
  text-align: center;
  border-top: 1px solid #d4d8d9;
  border-bottom: 1px solid #d4d8d9;
  &:focus {
    outline: none;
  }
`
export const OrderName = styled.div`
  font-size: 12px;
  font-weight: 400;
`
export const OrderColoSize = styled.div`
  span {
    font-size: 12px;
    color: #909090;
  }
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
  }
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
  }
`
