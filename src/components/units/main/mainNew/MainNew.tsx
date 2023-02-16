import * as S from "./MainNew.styles"
import { useEffect } from "react"
import PauseOnHover from "src/components/units/main/mainNew/mainNewCarousel/index.js"

export default function MainNew() {
  return (
    <>
      <S.NewWrapper>What's NEW</S.NewWrapper>
      <PauseOnHover />
    </>
  )
}
