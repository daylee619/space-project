export interface ILookBookListDataType {
  id: number
  title: string
  sub_title: string
  thumbnail: string
}

export interface ILookBookDetailDataType {
  id: number
  title: string
  sub_title: string
  content: string
  thumbnail: string
  lookbook: ILookBookType[]
}

export interface ILookBookType {
  image: string
  price: number
  productId: number
  productName: string
}

export interface ILookBookDetailPropsType {
  cloesHandler: () => void
  clickModal: number
}
