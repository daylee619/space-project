import styled from '@emotion/styled'

export const Contain = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(238, 236, 234);
    display: flex;
    justify-content: center;
`

export const ContainInContain = styled.div`
    width: 70%;
    background-color: white;
    border: 1px solid lightgray;
`

export const ItemContain = styled.div`
    background-color: lightgray;
    padding: 10px 0px;
`

export const ItemBox = styled.div`
    background-color: white;
`

export const OrderPrecautionsContain = styled.div`
`

export const OrderPrecautionsTitle = styled.div`
    height: 60px;
    background-color: rgb(40,40,40);
    font-size: 25px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const OrderPrecautionsBox = styled.div`
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    font-size: 18px;
`

export const OrderPrecautions = styled.span`
    color: red;
    padding: 5px 0px;
`

export const ConfirmBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: rgb(180, 49, 44);
    font-size: 25px;
    color: white;

    &:hover {
        cursor: pointer;
    }
`