export interface IWeeklyBest {
  weeklyBest: IWeeklyBestType[]
  categories: ICategoriesType[]
}

interface IWeeklyBestType {
  id: number
  name: string
  thumbnail: string
  price: number
  productColor: string[]
  review: string
  point: string
  stockCheck: IStockCheckType[]
  isLike: number | null
}

interface IStockCheckType {
  opt: IOptType[]
  colorId: number
  colorName: string
}

interface IOptType {
  stock: number
  sizeId: number
  sizeName: string
}
interface ICategoriesType {
  id: number
  name: string
}
