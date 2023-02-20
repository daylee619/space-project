import * as S from "./MainLookBook.styles"

import FocusOnSelect from "./mainLookBookCarousel/MainLookBookCarousel"

export default function MainLookBook() {
  return (
    <div>
      <S.LookBookTitle>LookBook</S.LookBookTitle>
      <FocusOnSelect />
    </div>
  )
}
