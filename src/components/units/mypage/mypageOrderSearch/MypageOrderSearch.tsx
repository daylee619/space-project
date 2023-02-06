/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios'
import { useRouter } from 'next/router'
import { ChangeEvent, Fragment, useEffect, useState } from 'react'
import { getDate, mdate } from '../../../../common/utils/date/Date'
import { IItemDataType } from '../Mypage.type'
import MypageFilterList from '../mypageFilterList/MypageFilterList'
import * as S from './MypageOrderSearch.style'

const MypageOrderSearch = () => {
    const [itemData, setItemData] = useState<IItemDataType>()
    const [startDate, setStartDate] = useState(getDate(new Date()))
    const [endDate, setEndDate] = useState(mdate(new Date(), 3, 0))

    const router = useRouter()
    const queryString: string | string[] = router.query.queryString ?? ''
    const URL_QUERY_ARRAY = !Array.isArray(queryString) ? queryString?.split('&') : queryString
    const URL_QUERY_ARRAY_STATE = URL_QUERY_ARRAY?.map((el: string) => el.split('='))
    console.log(URL_QUERY_ARRAY_STATE)

    const mypageItemData = async () => {
        try {
            await axios
                .get
                (`http://172.16.101.103:3000/order/history?history_start_date=${URL_QUERY_ARRAY_STATE[1][1]}&history_end_date=${URL_QUERY_ARRAY_STATE[0][1]}${URL_QUERY_ARRAY_STATE[2][1] && `&order_status=${URL_QUERY_ARRAY_STATE[2][1]}`}`,
                    {
                        headers: {
                            "authorization": `${localStorage.getItem('access_token')}`
                        }
                    })
                .then(res => {
                    console.log(res.data)
                    const { data } = res
                    setItemData(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        mypageItemData()
    }, [queryString])

    const todayDateClick = (id: string) => {
        if (id === "today" && URL_QUERY_ARRAY_STATE) {
            setStartDate(getDate(new Date()))
            setEndDate(mdate(new Date(), 0, 0))
            router.push(`/mypage/order/history/history_start_date=${getDate(new Date())}&history_end_date=${mdate(new Date(), 0, 0)}${URL_QUERY_ARRAY_STATE[2][1] && `&order_status=${URL_QUERY_ARRAY_STATE[2][1]}`}`)
        }
        if (id === "ownWeek" && URL_QUERY_ARRAY_STATE) {
            setStartDate(getDate(new Date()))
            setEndDate(mdate(new Date(), 0, 7))
            router.push(`/mypage/order/history/history_start_date=${getDate(new Date())}&history_end_date=${mdate(new Date(), 0, 7)}${URL_QUERY_ARRAY_STATE[2][1] && `&order_status=${URL_QUERY_ARRAY_STATE[2][1]}`}`)
        }
        if (id === "ownMonth" && URL_QUERY_ARRAY_STATE) {
            setStartDate(getDate(new Date()))
            setEndDate(mdate(new Date(), 1, 0))
            router.push(`/mypage/order/history/history_start_date=${getDate(new Date())}&history_end_date=${mdate(new Date(), 1, 0)}${URL_QUERY_ARRAY_STATE[2][1] && `&order_status=${URL_QUERY_ARRAY_STATE[2][1]}`}`)
        }
        if (id === "threeMonth" && URL_QUERY_ARRAY_STATE) {
            setStartDate(getDate(new Date()))
            setEndDate(mdate(new Date(), 3, 0))
            router.push(`/mypage/order/history/history_start_date=${getDate(new Date())}&history_end_date=${mdate(new Date(), 3, 0)}${URL_QUERY_ARRAY_STATE[2][1] && `&order_status=${URL_QUERY_ARRAY_STATE[2][1]}`}`)
        }
        if (id === "sixMonth" && URL_QUERY_ARRAY_STATE) {
            setStartDate(getDate(new Date()))
            setEndDate(mdate(new Date(), 6, 0))
            router.push(`/mypage/order/history/history_start_date=${getDate(new Date())}&history_end_date=${mdate(new Date(), 6, 0)}${URL_QUERY_ARRAY_STATE[2][1] && `&order_status=${URL_QUERY_ARRAY_STATE[2][1]}`}`)
        }
    }

    const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value !== 'fail' && URL_QUERY_ARRAY_STATE) {
            router.push(`/mypage/order/history/history_start_date=${URL_QUERY_ARRAY_STATE[0][1]}&history_end_date=${URL_QUERY_ARRAY_STATE[1][1]}&order_status=${e.target.value}`)
        }
    }

    const clickHandler = () => {
        if (URL_QUERY_ARRAY_STATE) {
            router.push(`/mypage/order/history/history_start_date=${startDate}&history_end_date=${endDate}${URL_QUERY_ARRAY_STATE[2][1] && `&order_status=${URL_QUERY_ARRAY_STATE[2][1]}`}`)
        }
    }

    return (
        <S.Contain>
            <S.PageTitle>주문조회</S.PageTitle>
            <S.SearchBox>
                <S.SearchInBox>
                    <S.SearchSelectBox>
                        <select onChange={changeHandler}>
                            <option value='fail'>전체 주문처리상태</option>
                            {
                                itemData?.orderFilter?.map(el =>
                                    <Fragment key={el.id}>
                                        <option value={el.filter}>{el.name}</option>
                                    </Fragment>
                                )
                            }
                        </select>
                    </S.SearchSelectBox>
                    <S.SearchDateButtonBox>
                        <S.SearchDateButton
                            onClick={() => { todayDateClick('today'); }}
                        >
                            오늘
                        </S.SearchDateButton>
                        <S.SearchDateButton
                            onClick={() => { todayDateClick('ownWeek'); }}
                        >
                            1주일
                        </S.SearchDateButton>
                        <S.SearchDateButton
                            onClick={() => { todayDateClick('ownMonth'); }}
                        >
                            1개월
                        </S.SearchDateButton>
                        <S.SearchDateButton
                            onClick={() => { todayDateClick('threeMonth'); }}
                        >
                            3개월
                        </S.SearchDateButton>
                        <S.SearchDateButton
                            onClick={() => { todayDateClick('sixMonth'); }}
                        >
                            6개월
                        </S.SearchDateButton>
                    </S.SearchDateButtonBox>
                    <S.SearchDateBox>
                        <S.SearchDate
                            type='date'
                            value={endDate}
                            onChange={(e) => { setEndDate(e.target.value); }}
                        />
                        <S.SearchSign>~</S.SearchSign>
                        <S.SearchDate
                            type='date'
                            value={startDate}
                            onChange={(e) => { setStartDate(e.target.value); }}
                        />
                    </S.SearchDateBox>
                    <S.SearchConfirmBox>
                        <S.SearchConfirm onClick={clickHandler}>조회</S.SearchConfirm>
                    </S.SearchConfirmBox>
                </S.SearchInBox>
            </S.SearchBox>
            <div>
                <MypageFilterList itemData={itemData} />
            </div>
        </S.Contain>
    )
}

export default MypageOrderSearch