import styled from "@emotion/styled"

import FocusOnSelect from "./mainLookBookCarousel"
// import MainLookBookDetail from "./mainLookBookCarousel/mainLookBookDetail"

export default function MainLookBook() {
  return (
    <>
      <LookBookTitle>LookBook</LookBookTitle>
      <FocusOnSelect />
      {/* <MainLookBookDetail /> */}
    </>
  )
}
export const LookBookTitle = styled.div`
  margin: 60px auto 50px;
  color: #1a1a1a;
  font-size: 42px;
  font-weight: 700;
  text-align: center;
`
