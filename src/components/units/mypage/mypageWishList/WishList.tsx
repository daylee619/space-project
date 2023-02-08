import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_IP } from '../../../../common/utils/ApiIp'
import { IWishListDataType } from '../Mypage.type'
import WishListItem from './wish-list-item/WishListItem'
import * as S from './WisthList.style'

const WishList = () => {
    const [wishListData, setWishListData] = useState<IWishListDataType[]>([])
    const [selectState, setSelectState] = useState<string>('')
    console.log(wishListData)

    const wishListDataHandler = async () => {
        try {
            await axios.get(`http://${API_IP}:3000/like`, {
                headers: {
                    "authorization": `${localStorage.getItem('access_token')}`
                }
            })
                .then(res => {
                    setWishListData(res.data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    const selectStateHandler = (selectValue: string) => {
        setSelectState(selectValue)
    }

    useEffect(() => {
        wishListDataHandler()
    }, [])

    return (
        <S.Contain>
            <S.PageTitle>위시리스트</S.PageTitle>
            <S.ItemTitleBox>
                <S.ItemTitleInfo>상품정보</S.ItemTitleInfo>
                <S.ItemTitlePoint>적립금</S.ItemTitlePoint>
                <S.ItemTitlePost>배송구분</S.ItemTitlePost>
                <S.ItemTitlePostPrice>배송비</S.ItemTitlePostPrice>
                <S.ItemTitleTotalPrice>합계</S.ItemTitleTotalPrice>
                <S.ItemTitleSelect>선택</S.ItemTitleSelect>
            </S.ItemTitleBox>
            {
                <WishListItem
                    wishListData={wishListData}
                    selectStateHandler={selectStateHandler}
                    // handleSingleCheck={handleSingleCheck}
                    // handleAllCheck={handleAllCheck}
                    // checkItems={checkItems}
                    selectState={selectState}
                />
            }
        </S.Contain>
    )
}

export default WishList