import * as S from "./MainLookBook.styles"

import FocusOnSelect from "./mainLookBookCarousel/MainLookBookCarousel"
// import MainLookBookDetail from "./mainLookBookCarousel/mainLookBookDetail"

export default function MainLookBook() {
  return (
    <>
      <S.LookBookTitle>LookBook</S.LookBookTitle>
      <FocusOnSelect />
      {/* <MainLookBookDetail /> */}
    </>
  )
}
