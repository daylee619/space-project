export interface IProDetail {
  id: number
  name: string
  thumbnail: string
  price: number
  likeId: number
  productImages: IProductImagesType[]
  options: IOptionsType[]
  description: string
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
}
