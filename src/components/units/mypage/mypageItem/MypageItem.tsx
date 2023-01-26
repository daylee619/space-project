import { getDate } from '../../../../common/utils/date/Date'
import { IMypageItemPropsType, IOrderListType } from '../Mypage.type'
import * as S from './MypageItem.style'


const MypageItem = (props: IMypageItemPropsType) => {
    const { itemData, mainData } = props

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
            }
        </>
    )
}

export default MypageItem