import styled from "@emotion/styled"
import PauseOnHover from "./mainSnapCarousel"

export default function MainSnap() {
  return (
    <>
      <SnapWrapper>
        <SnapTitle>Snap</SnapTitle>
        <PauseOnHover />
      </SnapWrapper>
    </>
  )
}
export const SnapWrapper = styled.div`
  padding: 40px auto 50px;
  margin-bottom: 100px;
`
export const SnapTitle = styled.div`
  margin: 60px auto 50px;
  color: #1a1a1a;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`
