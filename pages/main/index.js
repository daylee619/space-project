import CarouselFadeExample from "../../src/components/units/main/mainCarousel"
import "bootstrap/dist/css/bootstrap.min.css"
import MainWeeklyBest from "../../src/components/units/main/mainWeeklyBest"
import MainNew from "../../src/components/units/main/mainNew"
import MainPhotoReview from "../../src/components/units/main/mainPhotoReview"
import MainLookBook from "../../src/components/units/main/mainLookBook"
import MainSnap from "../../src/components/units/main/mainSnap"
import MainLookBookDetailCarousel from "../../src/components/units/main/mainLookBook/mainLookBookCarousel/mainLookBookDetailCarousel"

export default function MainPage() {
  return (
    <>
      <CarouselFadeExample />
      <MainWeeklyBest />
      <MainNew />
      <MainPhotoReview />
      <MainLookBook />
      <MainSnap />
      <MainLookBookDetailCarousel />
    </>
  )
}
