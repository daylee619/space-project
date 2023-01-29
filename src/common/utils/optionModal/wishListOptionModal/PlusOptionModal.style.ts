import styled from "@emotion/styled"

export const Contain = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  background-color: rgb(245, 245, 245);
  border: 1px solid darkgray;
`

export const Header = styled.div`
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: rgb(45, 45, 45);
`

export const HeaderTitle = styled.div`
  color: white;
  font-size: 15px;
`

export const HeaderX = styled.div`
  color: white;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`

export const ContentContain = styled.div`
  overflow: hidden;
  padding: 15px;
`

export const ContentTitle = styled.h1`
  font-size: 14px;
  padding: 8px 0;
  border-bottom: 1px solid lightgray;
`

export const ContentBox = styled.div`
  display: flex;
  padding: 10px;
`
export const ContentImg = styled.img`
  width: 50px;
  height: 80px;
`

export const ContentInBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 18px;
`

export const DisplayBox = styled.div``

// content-color-css
export const ContentColorbox = styled.div`
  display: flex;
  margin-bottom: 16px;
`

export const ColorTitle = styled.span`
  font-size: 14px;
`

export const ColorButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`

export const ColorLabel = styled.label`
  width: 40px;
  height: 20px;
  border: ${(props: { check: boolean }) =>
    props.check ? "2px solid gray" : "1px solid gray"};
  background-color: ${(props: { check: boolean }) =>
    props.check && "lightgray"};
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ColorCheckBox = styled.input`
  display: none;
`

export const ColorText = styled.span`
  font-size: 12px;
  margin-top: 12px;
  color: gray;
`

// content-size-css
export const ContentSizeBox = styled.div`
  display: flex;
`

export const SizeTitle = styled.span`
  font-size: 14px;
`

export const SizeButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`
export const SizeButton = styled.input``
export const SizeText = styled.span`
  font-size: 12px;
  margin-top: 12px;
  color: gray;
`
