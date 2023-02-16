import styled from '@emotion/styled'

export const Contain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const ContainIn = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
`

export const CartTitleBox = styled.div`
    margin: 40px;
`

export const CartTitle = styled.h1`
    font-size: 30px;
`

export const PostWayBox = styled.div`
    width:100%;
`

export const PostWayText = styled.div`
    padding-bottom: 15px;
    border-bottom: 3px solid black;
`

export const PostWayButtonBox = styled.div`
    margin-top: 20px;
`

export const PostWayButton = styled.button`
    border-radius: 30px;
    width: 150px;
    height: 40px;
    background-color: white;

    &:hover {
        cursor: pointer;
    }
`

export const ConfirmBox = styled.div`
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
`

export const ChoiseConfirm = styled.button`
    background-color: white;
    border: 1px solid lightgray;
    width: 150px;
    height: 40px;
    margin-right: 15px;

    &:hover {
        border: 1px solid gray;
        cursor: pointer;
    }
`
export const KeepGoingConfirm = styled.button`
    background-color: white;
    border: 1px solid lightgray;
    width: 150px;
    height: 40px;
    margin-right: 15px;

    &:hover {
        border: 1px solid gray;
        cursor: pointer;
    }
`
export const AllChoiseConfirm = styled.button`
    background-color: black;
    color: white;
    width: 150px;
    height: 40px;

    &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
    }
`

export const EmptiedCart = styled.div`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: lightgray;
`

export const CartItemContain = styled.div`
    width: 100%;
`

export const CartItemTitleBox = styled.div`
    width: 100%;
`

export const CartItemTitleBoxIn = styled.div`
    display: flex;
    border-top: 3px solid black;
    border-bottom: 1px solid lightgray;
    height: 45px;
    align-items: center;
`

export const TitleCheckBox = styled.div`
    width: 5%;
    display: flex;
    justify-content: center;
`

export const TitleItemInforMation = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    font-size: 12px;
`

export const TitleCount = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    font-size: 12px;
`
//
export const TitleSavings = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    font-size: 12px;
`

export const TitlePost = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    font-size: 12px;
`

export const TitlePostPrice = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    font-size: 12px;
`

export const TitleTotalPrice = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    font-size: 12px;
`

export const TitleChoose = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    font-size: 12px;
`

export const PriceContain = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(240,240,240);
    margin-top: 80px;
    border-radius: 10px;
`

export const UnderPriceBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
`

export const TextSpan = styled.span`
    font-size: 12px;
    font-weight: 350;
    margin-bottom: 8px;
`

export const CountSpan = styled.span`
    font-size: 20px;
    font-weight: bold;
`

export const Sign = styled.div`
    font-size: 25px;
    margin-right: 40px;
`

export const CartItemConfirmBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
`

export const ItemButton = styled.button`
    width: 80px;
    height: 30px;
    background-color: white;
    font-size: 8px;
    border: 1px solid lightgray;

    &:hover {
        cursor: pointer;
        border: 1px solid black;
    }
`

export const CartAllDelete = styled.button`
    width: 80px;
    height: 30px;
    background-color: white;
    font-size: 8px;
    border: 1px solid lightgray;
    margin-right: 15px;

    &:hover {
        cursor: pointer;
        border: 1px solid black;
    }
`