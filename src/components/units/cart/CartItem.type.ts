import { ChangeEvent, Dispatch, SetStateAction } from "react"

export interface ICartItemType {
  cartItem: ICartItemInType[]
  checkedHandler: (event: ChangeEvent<HTMLInputElement>, id: string) => void
  checkedState: string[]
  modalHandler: (optionId: number) => void
  optionModal: number
  colorIdHandler: (e: ChangeEvent<HTMLSelectElement>) => void
  colorIdState: string
  SelectDeleteClick: (e: any) => void
  addCountHandler: (quantity: number, cartId: number) => void
  minusCountHandler: (quantity: number, cartId: number) => void
  setOptionChangeMessage: Dispatch<SetStateAction<string>>
}

interface ICartItemInType {
  cartId: string
  optionId: number
  quantity: number
  sizeName: string
  colorName: string
  productId: number
  name: string
  price: number
  size: ISizeType
  color: IColorType[]
  imgUrl: string
}

interface ISizeType {
  name: string
}

interface IColorType {
  colorId: number
  colorName: string
  options: IOptionsType[]
}

interface IOptionsType {
  size: string
  stock: string
  optionId: string
}
