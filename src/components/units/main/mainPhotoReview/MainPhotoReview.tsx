import * as S from "./MainPhotoReview.styles"
import axios from "axios"
import { useEffect, useState } from "react"
import { API_IP } from "../../../../common/utils/ApiIp"
import ModalPortal from "../../../Portal"
import ReviewModal from "../reviewmodal"
import { IMainPhotoReview } from "./MainPhotoReview.types"

export default function MainPhotoReview() {
  const [data, setData] = useState<IMainPhotoReview[]>([])
  // useEffect(() => {
  //   axios.get("/data/mainReviewPhoto.json").then((res) => {
  //     setData(res.data)
  //   })
  // }, [])

  useEffect(() => {
    axios.get(`http://${API_IP}:3000/review/main`).then((res) => {
      setData(res.data)
    })
  }, [])

  // console.log(data)
  const [modalOn, setModalOn] = useState(false)
  const handleModal = () => {
    setModalOn(!modalOn)
  }
  return (
    <S.PhotoReviewWrapper>
      <S.PhotoReviewTitle>Photo Review +</S.PhotoReviewTitle>
      <S.PhotoBoxWrapper onClick={handleModal}>
        {data.map((el) => (
          <div key={el.productId}>
            <S.PhotoBox key={el.productId}>
              <S.Photo src={el.thumbnail} />
            </S.PhotoBox>
          </div>
        ))}
      </S.PhotoBoxWrapper>
      <ModalPortal>
        {modalOn && <ReviewModal onClose={handleModal} />}
      </ModalPortal>
    </S.PhotoReviewWrapper>
  )
}
