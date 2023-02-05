import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_IP } from '../../../../common/utils/ApiIp'
import { getDate } from '../../../../common/utils/date/Date'
import { IMypageItemPropsType, IOrderListType } from '../Mypage.type'
import * as S from './MypageItem.style'


const MypageItem = (props: IMypageItemPropsType) => {
    const { itemData, mainData } = props
    const [reder, setRender] = useState()

    const deleteHandler = async (orderProductId: number) => {
        try {
            await axios.delete(`http://${API_IP}:3000/order/${orderProductId}`)
                .then(res => {
                    const { data } = res
                    setRender(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    const AlldeleteHandler = async (orderId: number) => {
        try {
            await axios.delete(`http://172.30.1.37:3000/order/all/${orderId}`)
                .then(res => {
                    const { data } = res
                    setRender(data)
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
                                <S.Button disabled={el?.orderStatus.includes("취소")}>취소</S.Button>
                                <S.Button disabled={item?.shipment_status.includes('환불')}>환불</S.Button>
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
                            >전체 삭제</S.AllDelete>
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
                                                disabled={el?.orderStatus.includes("취소")}
                                                onClick={async () => { await deleteHandler(item.orderProductId); }}
                                            >
                                                취소
                                            </S.Button>
                                            <S.Button disabled={item?.shipment_status.includes('환불')}>환불</S.Button>
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