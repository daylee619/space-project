export interface IMainReviewModalProps {
  onClose: React.MouseEventHandler<HTMLButtonElement>
}
export interface IMainReviewModal {
  detailReview: IDetailReviewType
  productInfo: IProductInfoType[]
}

interface IDetailReviewType {
  nickname: string
  content: string
  thumbnail: string
  star: number
  created_at: string
  photos: any[]
  helpful: null | string
  unhelpful: string
  productId: number
}

interface IProductInfoType {
  id: number
  name: string
  thumbnail: string
  reviewCount: string
  starAverage: string
}
