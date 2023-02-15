import styled from "@emotion/styled"

export const Contain = styled.div`
  width: 500px;
  position: absolute;
  left: 35%;
  right: 50%;
  background-color: rgb(245, 245, 245);
  border: 1px solid darkgray;
`

export const Header = styled.div`
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: rgb(45, 45, 45);
`

export const HeaderTitle = styled.div`
  color: white;
  font-size: 15px;
`

export const HeaderX = styled.div`
  color: white;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`

export const ContentContain = styled.div`
  padding: 15px;
`

export const ContentTitle = styled.h1`
  font-size: 14px;
  padding: 8px 0;
  border-bottom: 1px solid lightgray;
`

export const ContentBox = styled.div`
  display: flex;
  padding: 10px;
`
export const ContentImg = styled.img`
  width: 50px;
  height: 80px;
`

export const ContentInBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 18px;
`

export const DisplayBox = styled.div``

// content-color-css
export const ContentColorbox = styled.div`
  display: flex;
`

export const ContentColorInBox = styled.div`
  display: flex;
  margin-bottom: 30px;
  position: relative;
`

export const ColorTitle = styled.span`
  font-size: 14px;
`

export const ColorButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`

export const ColorBoxIn = styled.div`
  display: flex;
  align-items: center;
`

interface IcssType {
  check: string[]
  colorId: string
}

export const ColorLabel = styled.label`
  width: 50px;
  height: 20px;
  margin-right: 5px;
  border-radius: 2px;
  border: ${(props: IcssType) =>
    props.check.includes(props.colorId)
      ? "2px solid gray"
      : "1px solid lightgray"};
  background-color: ${(props: IcssType) =>
    props.check.includes(props.colorId) ? "lightgray" : "rgb(240,240,240)"};
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

export const ColorCheckBox = styled.input`
  display: none;
`

export const ColorText = styled.span`
  font-size: 12px;
  margin-top: 12px;
  color: gray;
`

// content-size-css
export const ContentSizeBox = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 50px;
`

export const ContentSizeInBox = styled.div`
  display: flex;
  position: absolute;
`

export const SizeTitle = styled.span`
  font-size: 14px;
`

export const SizeButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 108px;
`

interface ISizeCssType {
  check: string[]
  sizeId: string
}

export const SizeLabel = styled.label`
  width: 50px;
  height: 20px;
  margin-right: 5px;
  border-radius: 2px;
  position: relative;
  border: ${(props: ISizeCssType) =>
    props.check.includes(props.sizeId)
      ? "2px solid gray"
      : "1px solid lightgray"};
  background-color: ${(props: ISizeCssType) =>
    props.check.includes(props.sizeId) ? "lightgray" : "rgb(240,240,240)"};
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

export const defaultLabelBox = styled.div`
  display: flex;
`

export const SizeDefaultLabel = styled.label`
  width: 50px;
  height: 20px;
  margin-right: 5px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  background-color: lightgray;
`

export const SizeDefaultInput = styled.input`
  display: none;
`

export const SizeCheck = styled.input`
  display: none;
`
export const SizeText = styled.span`
  font-size: 12px;
  margin-top: 12px;
  color: gray;
`

export const ItemCreateSpan = styled.span`
  font-size: 12px;
  color: gray;
  margin: 15px 0;
`

export const ItemCreateContain = styled.div`
  overflow: scroll;
  height: 200px;
`

export const ItemCreateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  padding: 15px 0;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`

export const TotalPriceBox = styled.div`
  border: 1px solid lightgray;
  height: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
`

export const CountBox = styled.div`
  display: flex;
  align-items: center;
`

export const Count = styled.span`
  font-size: 20px;
`

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
`

export const ConfirmOrderButton = styled.button`
  width: 85px;
  height: 20px;
  font-size: 11px;
  margin-right: 10px;
  background-color: rgb(40, 40, 40);
  border: 1px solid black;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

export const ConfirmCartButton = styled.button`
  width: 85px;
  height: 20px;
  font-size: 11px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid black;

  &:hover {
    cursor: pointer;
  }
`

export const ItemInfoBox = styled.div`
  font-size: 11px;
  display: flex;
  flex-direction: column;
`

export const ItemInfoTitle = styled.span`
  font-size: 12px;
`

export const ItemInfo = styled.span`
  color: gray;
`

export const ItemCountBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`

export const ItemCountInput = styled.input`
  width: 35px;
  height: 20px;
  border: 1px solid lightgray;
`

export const ItemDeleteButton = styled.button`
  width: 15px;
  height: 15px;
  background-color: gray;
  border: 1px solid gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`

export const ItemPrice = styled.div`
  font-size: 14px;
  margin-left: 30px;
`
