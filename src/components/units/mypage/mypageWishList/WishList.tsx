import axios from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'
import { IWishListDataType } from '../Mypage.type'
import WishListItem from './wish-list-item/WishListItem'
import * as S from './WisthList.style'

const WishList = () => {
    const [wishListData, setWishListData] = useState<IWishListDataType>()
    const [selectState, setSelectState] = useState<string>('')

    const wishListDataHandler = async () => {
        try {
            await axios.get('/data/getWishList.json')
                .then(res => {
                    const { data } = res
                    setWishListData(data)
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
                <S.ItemTitleCheckBox type='checkbox' />
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
                />
            }
        </S.Contain>
    )
}

export default WishList