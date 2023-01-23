import OrderContent from './orderContain/OrderContent'
import * as S from './Order.style'
import Orderer from './orderer/Orderer'
import OrderPost from './orederPost/OrderPost'
import axios from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'
import OrderItem from './orderItem/OrderItem'
import OrderInfo from './orderInfor/OrderInfo'
import OrderPaymentMethod from './orderPaymentMethod/OrderPaymentMethod'
import { IOrderInfoType, IOrderPostDataType } from './Order.type'


const Order = () => {
    const [orderData, setOrderData] = useState<any>([])
    const [totalPrice, setTotalPrice] = useState(0)
    console.log('1', totalPrice)

    const [orderPostData, setOrderPostData] = useState<IOrderPostDataType>(
        {
            writer: '',
            email: '',
            phone_number: '',
            post_writer: '',
            post_zip_code: '',
            post_address: '',
            post_detail_address: '',
            post_phone_number: '',
            message_state: '',
            post_message: ''
        }
    )

    const dataHandler = async () => {
        try {
            const data = await axios.get('/data/orderPage.json')
            setOrderData(data.data)
            // .then(res => { setOrderData(res?.data); })
        } catch (error) {
            console.log(error)
        }
    }

    const totalPriceHandler = () => {
        const data = { ...orderData }
        const temp = data.orderInfo?.map((el: IOrderInfoType) => el.priceByProduct)
        temp?.forEach((el: string) => { setTotalPrice(prev => prev + Number(el)); })
    }

    console.log('2', totalPrice)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setOrderPostData({ ...orderPostData, [e.target.name]: e.target.value })
    }

    const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setOrderPostData({ ...orderPostData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        dataHandler()
        totalPriceHandler()
    }, [])

    console.log('3', totalPrice)

    return (
        <S.Contain>
            <S.ContainInContain>
                <S.OrderPrecautionsContain>
                    <S.OrderPrecautionsTitle>
                        주문/결제
                    </S.OrderPrecautionsTitle>
                    <S.OrderPrecautionsBox>
                        <S.OrderPrecautions>※ 온라인몰 특성상 실시간 재고변동으로 인해 품절 시 별도의 안내 없이 취소될 수 있으며</S.OrderPrecautions>
                        <S.OrderPrecautions> 품절로 인해 결제 취소될 시 문자 또는 카카오톡으로 결제 취소 안내 문자를 드립니다.</S.OrderPrecautions>
                        <S.OrderPrecautions>※ 분리 배송 안내 : 주문하신 상품이 2개 이상인 경우 출고지별 재고 상황에 따라 분리 배송 될 수 있습니다.</S.OrderPrecautions>
                    </S.OrderPrecautionsBox>
                </S.OrderPrecautionsContain>
                <S.ItemContain>
                    <S.ItemBox>
                        <OrderContent title='주문자' >
                            <Orderer
                                orderData={orderData}
                                orderPostData={orderPostData}
                                changeHandler={changeHandler}
                            />
                        </OrderContent>
                    </S.ItemBox>
                </S.ItemContain>
                <S.ItemContain>
                    <S.ItemBox>
                        <OrderContent title='배송방법' >
                            <OrderPost
                                orderData={orderData}
                                orderPostData={orderPostData}
                                changeHandler={changeHandler}
                                selectHandler={selectHandler}
                            />
                        </OrderContent>
                    </S.ItemBox>
                </S.ItemContain>
                <S.ItemContain>
                    <S.ItemBox>
                        <OrderContent title='주문상품' >
                            <OrderItem orderData={orderData} />
                        </OrderContent>
                    </S.ItemBox>
                </S.ItemContain>
                <S.ItemContain>
                    <S.ItemBox>
                        <OrderContent title='결제정보' >
                            <OrderInfo totalPrice={totalPrice} />
                        </OrderContent>
                    </S.ItemBox>
                </S.ItemContain>
                <S.ItemContain>
                    <S.ItemBox>
                        <OrderContent title='결제수단' >
                            <OrderPaymentMethod />
                        </OrderContent>
                    </S.ItemBox>
                </S.ItemContain>
                <S.ConfirmBox>
                    {`${totalPrice}원 결제하기`}
                </S.ConfirmBox>
            </S.ContainInContain>
        </S.Contain>
    )
}

export default Order