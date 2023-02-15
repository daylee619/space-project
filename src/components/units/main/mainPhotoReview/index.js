import styled from "@emotion/styled"
import axios from "axios"
import { useEffect, useState } from "react"
import { API_IP } from '../../../../common/utils/ApiIp'
import ModalPortal from "../../../Portal"
import MainReviewModal from "../mainReviewModal"
import ReviewModal from "../reviewmodal"

export default function MainPhotoReview() {
  const [data, setData] = useState([])
  // useEffect(() => {
  //   axios.get("/data/mainReviewPhoto.json").then((res) => {
  //     setData(res.data)
  //   })
  // }, [])

  useEffect(() => {
    axios.get(`http://${API_IP}:3000/review/main`)
      .then((res) => {
        setData(res.data)
      })
  }, [])

  // console.log(data)
  const [modalOn, setModalOn] = useState(false)
  const handleModal = () => {
    setModalOn(!modalOn)
  }
  return (
    <PhotoReviewWrapper>
      <PhotoReviewTitle>Photo Review +</PhotoReviewTitle>
      <PhotoBoxWrapper onClick={handleModal}>
        {data.map((el) => (
          <div key={el.id}>
            <PhotoBox key={el.productId}>
              <Photo src={el.thumbnail} />
            </PhotoBox>
          </div>
        ))}
      </PhotoBoxWrapper>
      <ModalPortal>
        {modalOn && <ReviewModal onClose={handleModal} />}
      </ModalPortal>
    </PhotoReviewWrapper>
  )
}
export const PhotoReviewWrapper = styled.div`
  padding-bottom: 40px;
  /* position: relative; */
`
export const PhotoReviewTitle = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  margin: 60px auto 50px;
  font-weight: 700;
`
export const PhotoBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* position: relative; */
`
export const PhotoBox = styled.div`
  display: flex;
  cursor: pointer;
`
export const Photo = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 1px 2px 1px;
  cursor: pointer;
`
