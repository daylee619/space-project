import styled from "@emotion/styled"

export const Contain = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 80px;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginTitle = styled.h1`
  font-size: 50px;
`

export const SignInBox = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const SignInInput = styled.input`
  margin-top: 10px;
  width: 370px;
  height: 20px;
  padding: 10px;
  font-size: 17px;
  border-radius: 10px;
`

export const SignInErrorMessage = styled.div`
  position: absolute;
  font-size: 15px;
  color: red;
  padding: 3px;
`

export const PasswordInput = styled.input`
  margin-top: 20px;
  width: 370px;
  height: 20px;
  padding: 10px;
  font-size: 17px;
  border-radius: 10px;
`

export const PasswordErrorMessage = styled.div`
  position: absolute;
  font-size: 15px;
  color: red;
  padding: 3px;
`

export const LoginButton = styled.button`
  margin-top: 20px;
  width: 395px;
  height: 35px;
  font-size: 25px;
  text-align: center;
  color: white;
  background: black;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background: lightgray;
    color: black;
  }
`

export const SignUpButton = styled.button`
  margin-top: 10px;
  width: 395px;
  height: 35px;
  font-size: 25px;
  text-align: center;
  color: white;
  background: black;
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background: lightgray;
    color: black;
  }
`
