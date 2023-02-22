export interface IProList {
  result: IResultType[]
  productsCountList: ProductCountListType
}

interface ProductCountListType {
  "COUNT(p.id)": string
}
export interface IResultType {
  id: number
  name: string
  thumbnail: string
  description: string
  price: number
  news: string
  likeId: number[]
  color: IColorType[]
  orderCount: string
  likeCount: string | null
  reviewCount: string | null
  productId: number
}

export interface IColorType {
  size: ISizeType[]
  colorId: string
  colorName: string
}

interface ISizeType {
  stock: string
  sizeId: string
  sizeName: string
}

export interface ICount {
  count: number
}
