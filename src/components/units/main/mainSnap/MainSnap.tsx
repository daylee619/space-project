import * as S from "./MainSnap.styles"
import PauseOnHover from "./mainSnapCarousel/MainSnapCarousel"

export default function MainSnap() {
  return (
    <>
      <S.SnapWrapper>
        <S.SnapTitle>Snap</S.SnapTitle>
        <PauseOnHover />
      </S.SnapWrapper>
    </>
  )
}
