export interface IReviewScore {
  scoreCount: IScoreCountType[]
  scoreAvg: IScoreAvgType[]
}

interface IScoreCountType {
  count: string
  star: number
}

interface IScoreAvgType {
  starAVG: string
}

export interface IReviewByProduct {
  id: number
  title: string
  content: string
  created_at: string
  star: number
  thumbnail: string
  nickname: string
  unhelpful: string
  helpful: string
}
