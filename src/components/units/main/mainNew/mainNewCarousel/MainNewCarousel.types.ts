export interface IMainNewProduct {
  id: number
  name: string
  thumbnail: string
  price: number
  productColor: string[]
  created_at: string
  review: string
  stockCheck: IStockCheckType[] | null
}

interface IStockCheckType {
  opt: IOptType[] | null
  colorId: number
  colorName: string
}

interface IOptType {
  stock: number
  sizeId: number
  sizeName: string
}
