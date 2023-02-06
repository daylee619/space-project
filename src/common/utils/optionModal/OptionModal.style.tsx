import styled from '@emotion/styled'

export const Contain = styled.div`
    width: 300px;
    margin-top: 230px;
    position: absolute;
    border: 1px solid black;
    background-color: white;
`

export const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    background-color: rgb(50, 50, 50);
`

export const HeaderOptionText = styled.span`
    color: white;
    font-size: 12px;
    margin-left: 5px;
`

export const HeaderCloseText = styled.span`
    color: white;
    font-size: 20px;
    margin-right: 5px;

    &:hover {
        cursor: pointer;
    }
`

export const ModalContentContain = styled.div`
    width: 100%;
    height: 100%;
`

export const ModalContentBox = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`

export const ModalContentText = styled.div`
    font-size: 11px;
    padding-bottom: 5px;
    color: gray;
    border-bottom: 1px solid lightgray;
`

export const OptionBox = styled.div`
    margin-top: 5px;
`

export const OptionText = styled.div`
    font-size: 12px;
`

export const OptionSelectorBox = styled.div`
    margin-top: 5px;
`

export const ColorSelectorBox = styled.div`
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SizeSelectorBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ColorSelecte = styled.select`
    width: 160px;
    margin-right: 5px;
    font-size: 10px;
    display: flex;
    align-items: center;
    border: 1px solid lightgray;

`

export const ColorText = styled.span`
    font-size: 10px;
    margin-left: 5px;
`
export const SizeText = styled.span`
    font-size: 10px;
    margin-left: 5px;
`

export const ModalConfirmBox = styled.div`
    width:100%;
    height: 30px;
    background-color: rgb(245, 245, 245);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
`

export const Addbutton = styled.button`
    width: 40px;
    height: 20px;
    background-color: white;
    border: 1px solid lightgray;
    margin-right: 15px;

    &:hover {
        cursor: pointer;
    }
`

export const ChangeButton = styled.button`
    width: 40px;
    height: 20px;
    background-color: white;
    border: 1px solid lightgray;

    &:hover {
        cursor: pointer;
    }
`