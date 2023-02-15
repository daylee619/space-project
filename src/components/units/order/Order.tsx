import OrderContent from './orderContain/OrderContent'
import * as S from './Order.style'
import Orderer from './orderer/Orderer'
import OrderPost from './orederPost/OrderPost'
import axios from 'axios'
import { useEffect, useState } from 'react'
import OrderItem from './orderItem/OrderItem'
import OrderInfo from './orderInfor/OrderInfo'
import OrderPaymentMethod from './orderPaymentMethod/OrderPaymentMethod'
import { IOrderDataType, IOrderInfoType } from './Order.type'
import { API_IP } from '../../../common/utils/ApiIp'
import { useRouter } from 'next/router'

const Order = () => {
    const [orderData, setOrderData] = useState<IOrderDataType>()
    const [totalPrice, setTotalPrice] = useState(0)

    // post state
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [zipCode, setZipCode] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [detailAddress, setDetailAddress] = useState<string>('')

    // router methode
    const router = useRouter()

    // URL 처리 scope
    const URL = router?.query?.cartId?.toString()
    const URL_ARRAY: string[] = URL !== undefined ? URL?.split('&') : []
    const optionIdArray: string[] = URL_ARRAY[0]?.split('=')
    const optionId: string[] = optionIdArray !== undefined ? optionIdArray[1]?.split(',') : []
    const quantityArray: string[] = URL_ARRAY[1]?.split('=')
    const quantity: string[] = quantityArray !== undefined ? quantityArray[1]?.split(',') : []
    const cartItemArray: string[] = URL_ARRAY[2]?.split('=')
    const cartId: string[] = quantityArray !== undefined ? cartItemArray[1]?.split(',') : []

    interface IPostOptionDataType {
        optionId: string
        quantity: string
    }

    const dataHandler = async () => {
        try {
            const postOptionData: IPostOptionDataType[] = []
            for (let i = 0; i < optionId.length; i++) {
                if (optionId[i] !== undefined && quantity[i] !== undefined) {
                    postOptionData.push(
                        {
                            optionId: optionId[i],
                            quantity: quantity[i]
                        }
                    )
                }
            }
            await axios.post(`http://${API_IP}:3000/order`, {
                cartIdList: cartId[0] === '' ? null : cartId,
                optionIdList: postOptionData[0].optionId === '' ? null : postOptionData
            }, {
                headers: {
                    "authorization": `${localStorage.getItem('access_token')}`
                }
            })
                .then(res => {
                    const { data } = res
                    if (data) {
                        setOrderData(data)
                        const priceData = { ...data }
                        let price = 0
                        const temp = priceData.orderInfo?.map((el: IOrderInfoType) => el.priceByProduct)
                        temp?.forEach((el: string) => { setTotalPrice(price += Number(el)); })
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    // change function
    const nameChangehandler = (value: string) => {
        setName(value)
    }

    const phoneChangeHandler = (value: string) => {
        setPhone(value)
    }

    const zipCodeChangeHandler = (zipCode: string) => {
        setZipCode(zipCode)
    }

    const addressChangeHandler = (address: string) => {
        setAddress(address)
    }

    const detailAddressChangeHandler = (detailAddress: string) => {
        setDetailAddress(detailAddress)
    }

    // 결제하기
    const payHandler = async () => {
        try {
            const postOptionData: IPostOptionDataType[] = []
            for (let i = 0; i < optionId.length; i++) {
                if (optionId[i] !== undefined && quantity[i] !== undefined) {
                    postOptionData.push(
                        {
                            optionId: optionId[i],
                            quantity: quantity[i]
                        }
                    )
                }
            }
            if (postOptionData[0].optionId === '') {
                await axios.post(`http://${API_IP}:3000/order/by-cart`, {
                    address,
                    detail_address: detailAddress,
                    zip_code: zipCode,
                    phone: phone || orderData?.userInfo?.phone,
                    name: name || orderData?.userInfo?.name,
                    price: totalPrice,
                    cartInfo: cartId
                }, {
                    headers: {
                        'authorization': localStorage.getItem('access_token')
                    }
                })
                    .then(res => {
                        const { data } = res
                        if (data) {
                            alert('주문이 완료되었습니다')
                            router.push('/')
                        }
                    })
            } else {
                await axios.post(`http://${API_IP}:3000/order/by-optionId`, {
                    address,
                    detail_address: detailAddress,
                    zip_code: zipCode,
                    phone: phone || orderData?.userInfo?.phone,
                    name: name || orderData?.userInfo?.name,
                    price: totalPrice,
                    optionsInfo: postOptionData
                }, {
                    headers: {
                        'authorization': localStorage.getItem('access_token')
                    }
                })
                    .then(res => {
                        const { data } = res
                        if (data) {
                            alert('주문이 완료되었습니다')
                            router.push('/')
                        }
                    })
            }
        } catch (error) {
            console.log(error)
            alert('주문에 실패하셨습니다. 다시 시도해주세요.')
        }
    }

    useEffect(() => {
        dataHandler()
    }, [router?.query?.cartId, zipCode])

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
                                nameChangehandler={nameChangehandler}
                                phoneChangeHandler={phoneChangeHandler}
                            />
                        </OrderContent>
                    </S.ItemBox>
                </S.ItemContain>
                <S.ItemContain>
                    <S.ItemBox>
                        <OrderContent title='배송방법' >
                            <OrderPost
                                orderData={orderData}
                                zipCodeChangeHandler={zipCodeChangeHandler}
                                addressChangeHandler={addressChangeHandler}
                                detailAddressChangeHandler={detailAddressChangeHandler}
                                phone={phone}
                                name={name}
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
                            <OrderPaymentMethod
                                points={orderData?.userInfo?.points}
                            />
                        </OrderContent>
                    </S.ItemBox>
                </S.ItemContain>
                <S.ConfirmBox
                    onClick={payHandler}
                >
                    {`${totalPrice}원 결제하기`}
                </S.ConfirmBox>
            </S.ContainInContain>
        </S.Contain>
    )
}

export default Order