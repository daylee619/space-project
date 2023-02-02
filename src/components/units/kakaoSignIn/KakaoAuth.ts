/* eslint-disable @typescript-eslint/restrict-template-expressions */
// const CLIENT_ID: string | undefined = process.env.KAKAO_REST_API
const CLIENT_ID: string | undefined = "ac639d107a0467bf0284a95e469b0b07"
// const REDIRECT_URI: string | undefined = process.env.KAKAO_REDIRECT_URI
const REDIRECT_URI: string | undefined =
  "http://localhost:3000/oauth/callback/kakao"

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
