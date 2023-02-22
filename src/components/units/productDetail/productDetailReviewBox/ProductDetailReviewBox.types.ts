export interface IProductDetailReviewBoxProps {
  reviewData: IReviewDataType[]
}

interface IReviewDataType {
  id: number
  title: string
  content: string
  created_at: string
  star: number
  thumbnail: string
  nickname: string
  unhelpful: string
  helpful: string | null
}
