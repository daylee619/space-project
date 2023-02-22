export interface IReviewRecommend {
  id: number
  name: string
  thumbnail: string
  price: number
  star: string
  reviewCount: string
  reviewInform: IReviewInformType
  ranking: string | null
}

interface IReviewInformType {
  star: number
  content: string
  reviewId: number
  thumbnail: string
}
