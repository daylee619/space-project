import axios from 'axios'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { API_IP } from '../../../../common/utils/ApiIp'
import { IMainDataType } from '../Mypage.type'
import MypageFilterList from '../mypageFilterList/MypageFilterList'
import * as S from './MypageMain.style'

interface IMypageMainPropsType {
    setMessage: Dispatch<SetStateAction<string>>
}

const MypageMain = (props: IMypageMainPropsType) => {
    const [mainData, setMainData] = useState<IMainDataType>()
    console.log(mainData)
    // message state
    const [orderItemDeleteMessage, setOrderItemDeleteMessage] = useState<string>('')

    const mainDataGetHandler = async () => {
        try {
            await axios.get(`http://${API_IP}:3000/order/mypage`, {
                headers: {
                    "authorization": `${localStorage.getItem('access_token')}`
                }
            })
                .then(res => {
                    const { data } = res
                    setMainData(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        mainDataGetHandler()
    }, [orderItemDeleteMessage])

    return (
        <S.Contain>
            <S.PageTitle>주문처리 현황</S.PageTitle>
            <S.OrderStateBox>
                <S.TextBox>
                    <S.TitleName>입금대기</S.TitleName>
                    <S.Count>0</S.Count>
                </S.TextBox>
                <S.ArrowSign>{'>'}</S.ArrowSign>
                <S.TextBox>
                    <S.TitleName>상품준비중</S.TitleName>
                    <S.Count>0</S.Count>
                </S.TextBox>
                <S.ArrowSign>{'>'}</S.ArrowSign>
                <S.TextBox>
                    <S.TitleName>배송중</S.TitleName>
                    <S.Count>0</S.Count>
                </S.TextBox>
                <S.ArrowSign>{'>'}</S.ArrowSign>
                <S.TextBox>
                    <S.TitleName>배송완료</S.TitleName>
                    <S.Count>0</S.Count>
                </S.TextBox>
                <S.ArrowSign>{'>'}</S.ArrowSign>
                <S.TextBox>
                    <S.TitleName>취소/교환/반품</S.TitleName>
                    <S.Box>
                        {
                            mainData?.orderCountByStatus.map(el =>
                                <S.Count
                                    key={el.orderStatusId}
                                >
                                    {
                                        (el.orderStatusId === 7)
                                            ?
                                            el.countStatus
                                            :
                                            0
                                    }
                                </S.Count>)
                        }
                        <S.Desh> / </S.Desh>
                        {
                            mainData?.orderCountByStatus.map(el =>
                                <S.Count
                                    key={el.orderStatusId}
                                >
                                    {
                                        (el.orderStatusId === 8 && el.countStatus)
                                            ?
                                            el.countStatus
                                            :
                                            0
                                    }
                                </S.Count>)
                        }
                        <S.Desh> / </S.Desh>
                        <S.Desh> 0 </S.Desh>
                    </S.Box>
                </S.TextBox>
            </S.OrderStateBox>
            <div>

            </div>
            <div>
                <MypageFilterList
                    mainData={mainData}
                    setOrderItemDeleteMessage={setOrderItemDeleteMessage}
                    setMessage={props.setMessage}
                />
            </div>
        </S.Contain>
    )
}

export default MypageMain