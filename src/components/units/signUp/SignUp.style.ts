import styled from "@emotion/styled"
import { Input } from "antd"

export const Contain = styled.div`
  width: 100%;
  height: 100%;
`
export const UperBox = styled.div`
  display: flex;
  justify-content: center;
`

export const UserDataBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 15px;
`

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const NameInput = styled(Input)`
  width: 500px;
  height: 50px;
`

export const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const EmailInput = styled(Input)`
  width: 500px;
  height: 50px;
`

export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const PasswordInput = styled(Input.Password)`
  width: 500px;
  height: 50px;
`

export const UserImageBox = styled.div`
  margin-left: 100px;
`

export const UploadBox = styled.div``

export const PhoneContain = styled.div``

export const PhoneBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const DateBox = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`
export const GenderBox = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`

export const ConfirmBox = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DeleteButton = styled.button`
  margin-right: 30px;
  width: 100px;
  height: 50px;
  background-color: black;
  color: white;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: lightgray;
    color: black;
    border-radius: 10px;
  }
`

export const ConfirmButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: black;
  color: white;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: lightgray;
    color: black;
    border-radius: 10px;
  }
`
