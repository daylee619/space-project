import styled from '@emotion/styled'


export const Contain = styled.div`
    margin-top: 15px;
    width: 100%;
    height: 100%;
    border-bottom: 1px dotted lightgray;
`

export const BigBox = styled.div`
    display: flex;
    align-items: center;
`

export const ImgBox = styled.div`
    margin-right: 15px;
`

export const ThumbnailImg = styled.img`
    width: 100px;
    height: 100px;
    border: 1px solid lightgray;
`

export const OrderItemContentBox = styled.div`
    width: 100%;
`

export const ItemNameBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    font-size: 15px;
    font-weight: 500;
`

export const ItemXButton = styled.button`
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid gray;
    font-size: 20px;
    color: gray;
    font-weight: 100;

    &:hover {
        cursor: pointer;
    }
`

export const ItemOption = styled.div`
    color: gray;
    font-size: 15px;
    margin-bottom: 10px;
`

export const ItemQuantity = styled.div`
    color: gray;
    font-size: 15px;
    margin-bottom: 10px;
`

export const ItemPrice = styled.div`
    margin: 8px 0 10px 115px;
    font-weight: bold;
`