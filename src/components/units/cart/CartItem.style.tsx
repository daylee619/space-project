import styled from '@emotion/styled'

export const Contain = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(230,230,230);
`
//
export const ItemCheckBox = styled.div`
    width: 5%;
    display: flex;
    justify-content: center;
`

export const ItemItemInforMation = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
`

export const ItemCount = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ItemSavings = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
`

export const ItemPost = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
`

export const ItemPostPrice = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
`

export const ItemTotalPrice = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
`

export const ItemChoose = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ItemImgBox = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
`

export const ItemImg = styled.img`
    width: 80px;
    height: 110px;
`

export const ItemInformationBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    margin: 10px;
`

export const ItemInformation = styled.span`
    font-size: 12px;
    padding-bottom: 5px;
`

export const ItemInformationChange = styled.div`
    font-size: 12px;
    font-weight: 500;

    &:hover {
        cursor: pointer;
    }
`

export const ItemCountButton = styled.button`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    background-color: white;
    border: 1px solid lightgray;
    
    &:hover {
        cursor: pointer;
    }
`

export const ItemCountText = styled.span`
    font-size: 13px;
`

export const ItemChooseButton = styled.button`
    width: 75px;
    height: 25px;
    border: 1px solid lightgray;
    background-color: white;
    margin-bottom: 5px;

    &:hover {
        cursor: pointer;
    }
`

export const ItemPostText = styled.div`
    font-size: 12px;
`

export const ItemPostPriceText = styled.div`
    font-size: 12px;
`

export const ItemTotalPriceText = styled.div`
    font-size: 12px;
    font-weight: bold;
`