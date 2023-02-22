export interface IProDetail {
  id: number
  name: string
  thumbnail: string
  price: number
  likeId: number
  productImages: IProductImagesType[]
  options: IOptionsType[]
  description: string
  productId: number
}

interface IProductImagesType {
  image: string
  imageId: number
}

interface IOptionsType {
  colorId: number
  options: ISizeOptions[]
  colorName: string
}
interface ISizeOptions {
  size: string
  stock: number
  sizeId: number
  optionId: number
}
export interface IItemObject {
  size_id: number
  size_name: string
  color_id: number
  color_name: string
  count: number
  optionId: number
}
