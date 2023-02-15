export interface ICartItemInType {
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

export interface ISizeType {
  name: string
}

export interface IColorType {
  colorId: number
  colorName: string
  options: IOptionsType[]
}

export interface IOptionsType {
  size: string
  stock: string
  optionId: string
}
