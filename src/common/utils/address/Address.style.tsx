import styled from '@emotion/styled'


export const PhoneContain = styled.div`
    display: flex;
    align-items: center;
`

export const PhoneLabel = styled.label`
    width: 10%;
    font-size: 18px;
`

export const PhoneSelect = styled.select`
    width: 25%;
    height: 30px; 
    padding: 0 10px;
    border: 1px solid lightgray;
`

export const PhoneMiddleInput = styled.input`
    width: 25%;
    height: 30px; 
    padding: 0 10px;
    border: 1px solid lightgray;
`

export const PhoneEndInput = styled.input`
    width: 85%;
    height: 30px; 
    padding: 0 10px;
    border: 1px solid lightgray;
`

export const PhoneSign = styled.span`
    margin: 0 10px;
`

export const UserBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`

export const UserLabel = styled.label`
    width: 10%;
    font-size: 18px;
`

export const UserInput = styled.input`
    width: 85%;
    height: 30px;
    padding: 0 10px;
    border: 1px solid lightgray;
`

export const DefAddressInput = styled.input`
    margin-left: 10%;
    width: 85%;
    height: 30px;
    padding: 0 10px;
    border: 1px solid lightgray;
    margin-bottom: 10px;
    color: gray;
    outline: none;

    &:link {
        border: none;
    }
`

export const NewAddressInput = styled.input`
    margin-left: 10%;
    width: 85%;
    height: 30px;
    padding: 0 10px;
    border: 1px solid lightgray;
    margin-bottom: 10px;
`

export const ZipCodeBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

export const ZipCodeLabel = styled.label`
    width: 10%;
    font-size: 18px;
`

export const ZipCode = styled.input`
    width: 20%;
    height: 30px;
    padding: 0 10px;
    border: 1px solid lightgray;
    color: gray;
    outline: none;
`

export const AddressSearchButton = styled.button`
    height: 32px;
    padding: 0 10px;
    border: 1px solid black;
    background-color: white;

    &:hover {
        cursor: pointer;
    }
`

export const DaumPostBox = styled.div`
    border: 1px solid black;
    position: absolute;
    background-color: white;
    left: 50%;
`

export const PostTitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: rgb(40, 40 ,40);
`

export const PostTitleH = styled.h1`
    font-size: 18px;
    color: white;
`

export const PostTitleX = styled.div`
    font-size: 20px;
    color: white;

    &:hover {
        cursor: pointer;
    }
`