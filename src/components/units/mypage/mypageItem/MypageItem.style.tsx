import styled from '@emotion/styled'

export const Contain = styled.div`
    width: 100%;
    padding: 15px;
    /* height: 130px; */
    display: flex;
    justify-content: center;
    border-bottom: 1px solid lightgray;
    padding: 20px 20px;
`

export const OrderDate = styled.div`
    width: 15%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Div = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ItemDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 15px;
`

export const OrderInfo = styled.div`
    width: 40%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
`

export const OrderCount = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
`

export const OrderPrice = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
`

export const OrderState = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const OrderChagne = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CreatedAt = styled.div`
    font-size: 14px;
    font-weight: 500;
`

export const OrderNumber = styled.div`
    font-size: 12px;
    color: gray;
`

export const ThumbnailImg = styled.img`
    width: 80px;
    height: 100px;
    border: 1px solid lightgray;
`

export const ProductBox = styled.div`
    margin-left: 15px;
`

export const ProductName = styled.div`
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 10px;
`

export const OptionInfo = styled.div`
    font-size: 14px;
    color: gray;
    margin-bottom: 10px;
`

export const OptionChange = styled.div`
    &:hover {
        cursor: pointer;
    }
`

export const OrderStatus = styled.div`
    margin-bottom: 5px;
    font-weight: 500;
`

export const ShipmentStatus = styled.div`
    margin-bottom: 5px;
    font-weight: 500;
`

export const ShipmentCompany = styled.div`
    font-weight: 500;
    color: darkgray;
`

export const Button = styled.button`
    width: 100px;
    height: 30px;
    margin-bottom: 10px;
    background-color: rgb(245,245,245);
    border: 1px solid lightgray;

    &:hover {
        cursor: pointer;
    }
`


export const AllDelete = styled.div`
    width: 80px;
    height: 20px;
    margin-top: 10px;
    background-color: rgb(245,245,245);
    padding: 5px;
    border: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: lightgray;
    }
`