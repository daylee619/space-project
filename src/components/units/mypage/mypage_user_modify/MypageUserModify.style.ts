import styled from "@emotion/styled"

export const Contain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 15px;
`

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 900;
  padding-bottom: 12px;
  border-bottom: 2px solid black;
  margin-bottom: 30px;
`

export const UpperBox = styled.div`
  display: flex;
  justify-content: center;
`

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 50px;
`

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 15px;
`

export const Input = styled.input`
  width: 300px;
  height: 10px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid lightgray;
  border-radius: 5px;
`

export const GenderBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const GenderLabel = styled.label`
  /* margin-right: 15px; */
  font-size: 16px;
  font-weight: bold;
  background-color: rgb(250, 250, 250);
  text-align: center;
  padding: 5px 8px;
  border: 1px solid lightgray;
  border-radius: 5px;
`

export const GenderRadio = styled.input`
  /* display: none; */
  margin-right: 15px;
`

export const BottomBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
`

export const ConfirmButton = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 10px;
  background-color: rgb(255, 255, 224);
  color: black;
  border-radius: 5px;
  border: 1px solid lightgray;

  &:hover {
    background-color: rgb(255, 250, 205);
    cursor: pointer;
  }
`

export const ProFileImgLabel = styled.label`
  color: #0095f6;
  cursor: pointer;
  display: inline-block;
  margin-top: 15px;
`

export const ProFileImgInput = styled.input`
  display: none;
`

export const ProFileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`

export const UserProfileInBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -160px;
  margin-left: 20px;
`
