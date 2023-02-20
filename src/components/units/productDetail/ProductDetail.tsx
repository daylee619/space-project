import * as S from "./ProductDetail.styles"
import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import {
  ShareAltOutlined,
  HeartOutlined,
  HeartFilled,
  CloseOutlined,
} from "@ant-design/icons"
import ShareModal from "../Modal/sharemodal/ShareModal"
import ShippingModal from "../Modal/shippingmodal/ShippingModal"
import RefundModal from "../Modal/refundmodal/RefundModal"
import WishModal from "../Modal/wishmodal/WishModal"
import CartModal from "../Modal/CartModal/CartModal"
import { API_IP } from "../../../common/utils/ApiIp"
import { useRouter } from "next/router"
import { IProDetail } from "./ProductDetail.types"
const ProductDetail = () => {
  const [data, setData] = useState<IProDetail>([])
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
  const [colorCheck, setColorCheck] = useState<number[]>([])

  const [sizeCheck, setSizeCheck] = useState<number[]>([])

  const changeHandler = (checked, colorId: number, colorName: string) => {
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

  const soloCountHandler = (colorId: number, sizeId: number) => {
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
  const soloMinusCountHandler = (colorId: number, sizeId: number) => {
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

  const deleteItem = (index: number, sizeId: number, colorId: number) => {
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
    <S.Contain>
      <S.DetailWrapper>
        <S.DetailImg>
          <S.Thumbnail
            src={data.thumbnail}
            alt={data.thumbnail}
          />
          <S.ProductImgDetailBox>
            <S.ProductImgDetailName>{data.name}</S.ProductImgDetailName>
            <S.DetailThumbnail
              src={data.thumbnail}
              alt={data.thumbnail}
            />

            <S.ImgWrapper isMoreView={isMoreView}>
              {data.productImages?.map((el) => (
                <S.ProductImgDetail
                  src={el.image}
                  alt={el.image}
                  key={el.imageId}
                />
              ))}
              <S.ProductInfoWrite src="/images/productinfo.jpg" />
              <S.WashCareWrite src="/images/washandcare.jpg" />
            </S.ImgWrapper>
            <S.MoreViewBtnWrapper isMoreView={isMoreView}>
              <S.MoreViewBtn onClick={onClickImgMoreViewBtn}>
                {isMoreView ? "상품정보 접기" : "상품정보 더보기"}
              </S.MoreViewBtn>
            </S.MoreViewBtnWrapper>
          </S.ProductImgDetailBox>
          <S.SizeWrapper>
            <S.MyFitSizeTitle>MY FIT SIZE</S.MyFitSizeTitle>
            <S.SizeExplain src="/images/sizeexplain.jpg" />
            <S.SizeInfoImg src="/images/sizeinfo.jpg" />
            <S.DescritionWrapper>
              <S.DescriptionTitle>Description</S.DescriptionTitle>
              <S.Description>{data.description}</S.Description>
            </S.DescritionWrapper>
          </S.SizeWrapper>
        </S.DetailImg>

        <S.DetailInfoWrappeer>
          <div>
            <S.ProductName>{data.name}</S.ProductName>
            <S.PriceBox>
              {data.price}
              <S.Share onClick={openShareModal}>
                <ShareAltOutlined />
              </S.Share>
              {isShareModal && (
                <ShareModal
                  isModal={isShareModal}
                  setIsModal={setIsShareModal}
                  open={openShareModal}
                  close={closeShareModal}
                />
              )}
            </S.PriceBox>
            <S.ReorderButtonBox>
              <S.ReorderButton>재입고 알림</S.ReorderButton>
            </S.ReorderButtonBox>
          </div>
          <S.CouponBox>
            <S.Coupon>신규가입 혜택</S.Coupon>
            <S.Coupon>신규 가입 시 웰컴 쿠폰백 즉시 지급</S.Coupon>
          </S.CouponBox>
          <div>
            <S.ColorTitle>Color</S.ColorTitle>
            <S.ColorButtonBox>
              {data.options?.map((el) => (
                <Fragment key={el.colorId}>
                  <S.ColorLabel
                    htmlFor={el.colorId}
                    colorCheck={colorCheck}
                    cssId={el.colorId}
                  >
                    `(${el.colorId})`${el.colorName}
                    {/* {"(" + el.colorId + ")" + el.colorName} */}
                  </S.ColorLabel>
                  <S.ColorButton
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
            </S.ColorButtonBox>
            <S.OptionNotice>
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
            </S.OptionNotice>
          </div>
          <S.SizeBox>
            <S.SizeTitle>Size</S.SizeTitle>
            <div style={{ paddingTop: "10px" }}>
              {data.options?.map(
                (el) =>
                  colorCheck.includes(el.colorId) &&
                  el.options?.map((item, i) => (
                    <Fragment key={i}>
                      <S.SizeLabel
                        htmlFor={item.sizeId}
                        sizeCheck={sizeCheck}
                        cssId={item.sizeId}
                      >
                        {item.size}
                      </S.SizeLabel>
                      <S.SizeButton
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
            <S.OptionNotice>
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
            </S.OptionNotice>

            <S.SizeRecommendBtn>사이즈를 추천합니다.</S.SizeRecommendBtn>
          </S.SizeBox>
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
            <S.OrderBoxWrapper key={index}>
              <S.OptionOrderBox>
                <S.OrderName>{data.name}</S.OrderName>
                <S.OrderColoSize>
                  <span>{el.color_name}/</span>
                  <span>{el.size_name}</span>
                </S.OrderColoSize>
              </S.OptionOrderBox>

              <div>
                <S.MinusBtn
                  onClick={() => {
                    soloMinusCountHandler(el.color_id, el.size_id)
                  }}
                >
                  -
                </S.MinusBtn>
                <S.InputNumber
                  type="number"
                  value={el.count}
                />
                <S.PlusBtn
                  onClick={() => {
                    soloCountHandler(el.color_id, el.size_id)
                  }}
                >
                  +
                </S.PlusBtn>
              </div>

              <S.CloseBtn
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
              </S.CloseBtn>
            </S.OrderBoxWrapper>
          ))}

          <S.PriceTotal>
            <S.PriceTotalTitle>총 상품금액</S.PriceTotalTitle>
            <S.PriceTotalNumber>
              {sumConut * data.price} ({sumConut}개)
            </S.PriceTotalNumber>
          </S.PriceTotal>
          <S.BuyBtnBox>
            <S.LikeBtn
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
            </S.LikeBtn>
            {isWishModal && (
              <WishModal
                isWishModal={isWishModal}
                close={closeWishModal}
              />
            )}
            <S.CartBtn
              onClick={() => {
                cartHandler()
              }}
            >
              장바구니
            </S.CartBtn>
            {isCartModal && (
              <CartModal
                isCartModal={isCartModal}
                close={closeCartModal}
              />
            )}
            <S.BuyBtn onClick={orederHandler}>구매하기</S.BuyBtn>
          </S.BuyBtnBox>
          <S.ReviewButton>
            REVIEW EVENT <div>리뷰 작성 시 최대 10,000원 적립</div>
          </S.ReviewButton>
          <S.ExplainButtonBox>
            <S.SizeInfo>
              사이즈정보 * 상품정보 제공공시
              <img src="https://spao.com/morenvyimg/detail_arrow.png" />
            </S.SizeInfo>

            <S.ShippingeInfo onClick={openShippingModal}>
              배송안내
              <img src="https://spao.com/morenvyimg/detail_arrow.png" />
            </S.ShippingeInfo>
            {isShippingModal && (
              <ShippingModal
                isShippingModal={isShippingModal}
                setIsShippingModal={setIsShippingModal}
                open={openShippingModal}
                close={closeShippingModal}
              />
            )}
            <S.CancelInfo onClick={openRefundModal}>
              취소/반품/교환/환불 안내
              <img src="https://spao.com/morenvyimg/detail_arrow.png" />
            </S.CancelInfo>
            {isRefundModal && (
              <RefundModal
                isRefundModal={isRefundModal}
                setIsRefundModal={setIsRefundModal}
                open={openRefundModal}
                close={closeRefundModal}
              />
            )}
          </S.ExplainButtonBox>
        </S.DetailInfoWrappeer>
      </S.DetailWrapper>
    </S.Contain>
  )
}

export default ProductDetail
