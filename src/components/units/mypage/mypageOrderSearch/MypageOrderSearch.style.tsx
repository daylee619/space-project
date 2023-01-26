import styled from '@emotion/styled'


export const Contain = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 20px;
`

export const PageTitle = styled.div`
    font-size: 18px;
    font-weight: 900;
    padding-bottom: 12px;
    border-bottom: 2px solid black;
    margin-bottom: 30px;
`

export const SearchBox = styled.div`
    height: 150px;
    background-color: rgb(245, 245, 245);
    padding-top: 20px;
    margin-bottom: 50px;
`

export const SearchInBox = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    border: 4px solid lightgray;
    padding: 18px;
`

export const SearchSelectBox = styled.div`
    padding-right: 5px;
    border-right: 1px solid lightgray;
`

export const SearchDateButtonBox = styled.div`
    padding: 0 5px;
`

export const SearchDateButton = styled.button`
    padding: 3px;
    color: gray;
    border: 1px solid gray;

    &:hover {
        cursor: pointer;
        background-color: lightgray;
    }
`

export const SearchDateBox = styled.div`
    margin-right: 5px;
`

export const SearchDate = styled.input`
    &:hover {
        cursor: pointer;
    }
`

export const SearchSign = styled.span`
    margin: 0 5px;
`

export const SearchConfirmBox = styled.div`
    
`

export const SearchConfirm = styled.button`
    background-color: rgb(40, 40, 40);
    border: 1px solid black;
    padding: 2px;
    color: white;

    &:hover {
        cursor: pointer;
    }
`