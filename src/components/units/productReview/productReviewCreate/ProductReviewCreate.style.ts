import styled from "@emotion/styled"

export const Contain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TitleBox = styled.div`
  width: 100%;
`

export const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`

export const ReviewCreateContain = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ReivewCreateBox = styled.div`
  display: flex;
  align-items: center;
`

export const ReviewCreate = styled.textarea`
  resize: none;
  border: 1px solid lightgray;
  width: 500px;
  height: 50px;
`

export const ReivewImgBox = styled.div`
  width: 100%;
  height: 160px;
  padding: 10px 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: rgb(250, 250, 250);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`

// export const ReivewText = styled.div`
//   text-align: center;
//   color: gray;
//   font-size: 13px;
// `

export const ReviewImg = styled.img`
  width: 150px;
  height: 150px;
`

export const ReviewConfirm = styled.button`
  height: 56px;
  width: 80px;
  margin-left: 15px;
  background-color: rgb(45, 45, 45);
  color: white;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`

export const FileUploadBox = styled.div`
  width: 100%;
  margin-top: 12px;
`

export const FileUploadLabel = styled.label`
  padding: 5px;
  border-radius: 5px;
  font-size: 13px;
  color: rgb(45, 45, 45);
  border: 1px solid rgb(235, 235, 235);
  background-color: rgb(235, 235, 235);

  &:hover {
    cursor: pointer;
    color: black;
    border: 1px solid lightgray;
    background-color: lightgray;
  }
`

export const Delete = styled.div`
  position: relative;
  color: blue;
  font-size: 18px;
  top: -65px;
  right: 12px;

  &:hover {
    cursor: pointer;
  }
`

export const FileUpload = styled.input`
  display: none;
`

export const RateBox = styled.div`
  width: 100%;
  margin-bottom: 12px;
`
