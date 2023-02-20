import styled from "@emotion/styled"
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

interface IImgWrapperPropsType {
  isMoreView: boolean
}

export const ImgWrapper = styled.div`
  max-height: ${(props: IImgWrapperPropsType) =>
    props.isMoreView ? "" : "10px"};
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
    height: ${(props: IImgWrapperPropsType) =>
      props.isMoreView ? "" : "50px"};
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
interface IColorCheck {
  colorCheck: number[]
  cssId: number
}
export const ColorLabel = styled.label`
  font-size: 10px;
  /* border: 1px solid #d5d5d5; */
  border: ${(props: IColorCheck) =>
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
interface ILabelProps {
  sizeCheck: number[]
  cssId: number
}
export const SizeLabel = styled.label`
  font-size: 10px;
  border: 1px solid #d5d5d5;
  background-color: transparent;
  padding: 6px 5px;
  margin-right: 10px;
  cursor: pointer;
  border: ${(props: ILabelProps) =>
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
