import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_IP } from '../../../../common/utils/ApiIp'
import { getDate } from '../../../../common/utils/date/Date'
import { IMypageItemPropsType, IOrderListType } from '../Mypage.type'
import * as S from './MypageItem.style'


const MypageItem = (props: IMypageItemPropsType) => {
    const { itemData, mainData, setOrderItemDeleteMessage, setMessage } = props
    const [reder, setRender] = useState()

    const AlldeleteHandler = async (orderId: number) => {
        try {
            setOrderItemDeleteMessage('')
            setMessage('')
            await axios.delete(`http://${API_IP}:3000/order/all/${orderId}`, {
                headers: {
                    'authorization': localStorage.getItem('access_token')
                }
            })
                .then(res => {
                    const { data } = res
                    setRender(data)
                    setOrderItemDeleteMessage(data.message)
                    setMessage(data.message)
                })
        } catch (error) {
            console.log(error)
        }
    }

    // mypage 주문상품 단일 취소
    const productOrderDeleteHandler = async (orderProductId: number) => {
        try {
            setOrderItemDeleteMessage('')
            setMessage('')
            await axios.delete(`http://${API_IP}:3000/order/${orderProductId}`, {
                headers: {
                    'authorization': localStorage.getItem('access_token')
                }
            })
                .then(res => {
                    const { data } = res
                    if (data) {
                        setOrderItemDeleteMessage(data.message)
                        setMessage(data.message)
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { }, [reder])

    return (
        <>
            {itemData ?
                itemData?.orderList?.map((el: IOrderListType) =>
                    el.orderProductInfo.map((item, index) =>
                        <S.Contain key={index}>
                            <S.OrderDate>
                                <S.CreatedAt>{getDate(new Date(el.created_at))}</S.CreatedAt>
                                <S.OrderNumber>[{el.order_number}]</S.OrderNumber>
                            </S.OrderDate>
                            <S.OrderInfo>
                                <S.ThumbnailImg src={item?.thumbnail} alt={item?.productName} />
                                <S.ProductBox>
                                    <S.ProductName>{item?.productName}</S.ProductName>
                                    <S.OptionInfo>
                                        {`(${item?.optionInfo.size})/${item?.optionInfo.colorName}`}
                                    </S.OptionInfo>
                                    <S.OptionChange>
                                        옵션변경
                                    </S.OptionChange>
                                </S.ProductBox>
                            </S.OrderInfo>
                            <S.OrderCount>
                                {item?.quantity}
                            </S.OrderCount>
                            <S.OrderPrice>
                                {item?.price}
                            </S.OrderPrice>
                            <S.OrderState>
                                <S.OrderStatus>{el?.orderStatus}</S.OrderStatus>
                                <S.ShipmentStatus>{item?.shipment_status}</S.ShipmentStatus>
                                <S.ShipmentCompany>({item?.shippingCompany})</S.ShipmentCompany>
                            </S.OrderState>
                            <S.OrderChagne>
                                <S.Button
                                    disabled={
                                        item.shipment_status === "구매취소"
                                        ||
                                        item.shipment_status === "구매확정"
                                        ||
                                        item.shipment_status === "환불요청"
                                        ||
                                        item.shipment_status === "환불완료"
                                        ||
                                        item.shipment_status === "배송중"
                                        ||
                                        item.shipment_status === "배송완료"
                                    }
                                >
                                    취소
                                </S.Button>
                                <S.Button
                                    disabled={
                                        item.shipment_status === "구매취소"
                                        ||
                                        item.shipment_status === "구매확정"
                                        ||
                                        item.shipment_status === "환불요청"
                                        ||
                                        item.shipment_status === "환불완료"
                                        ||
                                        item.shipment_status === "배송준비중"
                                    }
                                >
                                    환불
                                </S.Button>
                            </S.OrderChagne>
                        </S.Contain>
                    )
                )
                :
                mainData?.orderHistory?.map((el: IOrderListType) =>
                    <S.Contain key={el.id}>
                        <S.OrderDate>
                            <S.CreatedAt>{getDate(new Date(el.created_at))}</S.CreatedAt>
                            <S.OrderNumber>[{el.order_number}]</S.OrderNumber>
                            <S.AllDelete
                                onClick={async () => { await AlldeleteHandler(el.id); }}
                            >
                                전체 취소
                            </S.AllDelete>
                        </S.OrderDate>
                        <S.Div>
                            {
                                el.orderProductInfo.map((item, index) =>
                                    <S.ItemDiv key={item.orderProductId}>
                                        <S.OrderInfo>
                                            <S.ThumbnailImg src={item?.thumbnail} alt={item?.productName} />
                                            <S.ProductBox>
                                                <S.ProductName>{item?.productName}</S.ProductName>
                                                <S.OptionInfo>
                                                    {`(${item?.optionInfo.size})/${item?.optionInfo.colorName}`}
                                                </S.OptionInfo>
                                                {/* <S.OptionChange>
                                        옵션변경
                                    </S.OptionChange> */}
                                            </S.ProductBox>
                                        </S.OrderInfo>
                                        <S.OrderCount>
                                            {item?.quantity}
                                        </S.OrderCount>
                                        <S.OrderPrice>
                                            {item?.price}
                                        </S.OrderPrice>
                                        <S.OrderState>
                                            <S.OrderStatus>{el?.orderStatus}</S.OrderStatus>
                                            <S.ShipmentStatus>{item?.shipment_status}</S.ShipmentStatus>
                                            <S.ShipmentCompany>({item?.shippingCompany})</S.ShipmentCompany>
                                        </S.OrderState>
                                        <S.OrderChagne>
                                            <S.Button
                                                disabled={
                                                    item.shipment_status === "구매취소"
                                                    ||
                                                    item.shipment_status === "구매확정"
                                                    ||
                                                    item.shipment_status === "환불요청"
                                                    ||
                                                    item.shipment_status === "환불완료"
                                                    ||
                                                    item.shipment_status === "배송중"
                                                    ||
                                                    item.shipment_status === "배송완료"
                                                }
                                                onClick={async () => { await productOrderDeleteHandler(item.orderProductId); }}
                                            >
                                                취소
                                            </S.Button>
                                            <S.Button
                                                onClick={async () => { await productOrderDeleteHandler(item.orderProductId); }}
                                                disabled={
                                                    item.shipment_status === "구매취소"
                                                    ||
                                                    item.shipment_status === "구매확정"
                                                    ||
                                                    item.shipment_status === "환불요청"
                                                    ||
                                                    item.shipment_status === "환불완료"
                                                    ||
                                                    item.shipment_status === "배송준비중"
                                                }
                                            >
                                                환불
                                            </S.Button>
                                        </S.OrderChagne>
                                    </S.ItemDiv>
                                )
                            }
                        </S.Div>
                    </S.Contain>
                )
            }
        </>
    )
}

export default MypageItem