import styled from "@emotion/styled"
import { useEffect } from "react"
import PauseOnHover from "src/components/units/main/mainNew/mainNewCarousel/index.js"

export default function MainNew() {
  return (
    <>
      <NewWrapper>What's NEW</NewWrapper>
      <PauseOnHover />
    </>
  )
}

export const NewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px auto 50px;
  font-size: 40px;
  font-weight: 700;
`
