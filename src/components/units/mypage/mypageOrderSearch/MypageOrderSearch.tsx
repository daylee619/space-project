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
    const [orderStatus, setOrderStatus] = useState('')

    const router = useRouter()
    const queryEndDate = router.query('endDate')
    const queryStartDate = router.query('startDate')
    const queryOrderStatus = router.query('orderStatus')

    const mypageItemData = async () => {
        try {
            await axios.get(`http://192.168.252.162:3000/order/history/2?history_start_date=${queryEndDate}&history_end_date=${queryStartDate}&order_status=${queryOrderStatus}`)
                .then(res => {
                    const { data } = res
                    setItemData(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        mypageItemData()
    }, [])

    const todayDateClick = async (id: string) => {
        try {
            if (id === "today") {
                setStartDate(getDate(new Date()))
                setEndDate(mdate(new Date(), 0, 0))
                router.push(`/mypage/order/history/2?history_start_date=${endDate}&history_end_date=${startDate}&order_status=${orderStatus}`)
                // await axios.get(`http://192.168.252.162:3000/order/history/2?history_start_date=${endDate}&history_end_date=${startDate}&order_status=${orderStatus}`)
            }
            if (id === "ownWeek") {
                setStartDate(getDate(new Date()))
                setEndDate(mdate(new Date(), 0, 7))
                await axios.get(`http://192.168.252.162:3000/order/history/2?history_start_date=${endDate}&history_end_date=${startDate}&order_status=${orderStatus}`)
            }
            if (id === "ownMonth") {
                setStartDate(getDate(new Date()))
                setEndDate(mdate(new Date(), 1, 0))
                await axios.get(`http://192.168.252.162:3000/order/history/2?history_start_date=${endDate}&history_end_date=${startDate}&order_status=${orderStatus}`)
            }
            if (id === "threeMonth") {
                setStartDate(getDate(new Date()))
                setEndDate(mdate(new Date(), 3, 0))
                await axios.get(`http://192.168.252.162:3000/order/history/2?history_start_date=${endDate}&history_end_date=${startDate}&order_status=${orderStatus}`)
            }
            if (id === "sixMonth") {
                setStartDate(getDate(new Date()))
                setEndDate(mdate(new Date(), 6, 0))
                await axios.get(`http://192.168.252.162:3000/order/history/2?history_start_date=${endDate}&history_end_date=${startDate}&order_status=${orderStatus}`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const changeHandler = async (e: ChangeEvent<HTMLSelectElement>) => {
        try {
            if (e.target.value !== 'fail') {
                setOrderStatus(e.target.value)
                await axios.get(`http://192.168.252.162:3000/order/history/2?history_start_date=${endDate}&history_end_date=${startDate}&order_status=${orderStatus}`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const clickHandler = async () => {
        try {
            await axios.get(`http://192.168.252.162:3000/order/history/2?history_start_date=${endDate}&history_end_date=${startDate}&order_status=${orderStatus}`)
        } catch (error) {
            console.log(error)
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
                        />
                        <S.SearchSign>~</S.SearchSign>
                        <S.SearchDate
                            type='date'
                            value={startDate}
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