import styled from "@emotion/styled"

export const Contain = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 15px;
  border-top: 1px solid lightgray;
  margin-top: 100px;
`

export const CommentText = styled.div`
  font-size: 13px;
  margin-bottom: 15px;
`

export const CommentBox = styled.div``

export const UserInfoBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`

export const UserIdBox = styled.div`
  margin-right: 15px;
`

export const UserIdLael = styled.label`
  font-size: 14px;
  margin-right: 10px;
`

export const UserIdInput = styled.input`
  width: 80px;
  height: 10px;
  border: 1px solid lightgray;
`

export const PasswordBox = styled.div`
  margin-right: 15px;
`

export const PasswordLael = styled.label`
  font-size: 14px;
  margin-right: 10px;
`

export const PasswordInput = styled.input`
  width: 80px;
  height: 10px;
  border: 1px solid lightgray;
`

export const CommentCreateBox = styled.div`
  display: flex;
  align-items: center;
`

export const CommentCreate = styled.textarea`
  width: 100%;
  height: 30px;
  resize: none;
  border: 1px solid lightgray;
`

export const CommentConfirm = styled.button`
  width: 70px;
  height: 37px;
  padding: 5px;
  border: 1px solid lightgray;
  background-color: rgb(40, 40, 40);
  color: white;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`
