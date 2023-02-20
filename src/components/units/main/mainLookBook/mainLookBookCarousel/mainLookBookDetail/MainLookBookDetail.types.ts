export interface IMainLookBookDetail {
  lookbookId: number
  title: string
  subTitle: string
  content: string
  thumbnail: string
  images: string[]
  productInfo: IProductInfoType[]
}

interface IProductInfoType {
  price: number
  productId: number
  thumbnail: string
  productName: string
}

export interface ILookBookProps {
  onClose: React.MouseEventHandler<HTMLSpanElement>
}
