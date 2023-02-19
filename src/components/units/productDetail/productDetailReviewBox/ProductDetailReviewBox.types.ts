export interface IProductDetailReviewBoxProps {
  reviewData: IReviewDataType[]
  data: IDataType[]
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

interface IDataType {
  scoreCount: IScoreCountType[]
  scoreAvg: IScoreAvg[]
}

interface IScoreCountType {
  count: string
  star: number
}
interface IScoreAvg {
  starAVG: string
}
