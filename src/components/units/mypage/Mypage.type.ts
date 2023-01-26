export interface IItemDataType {
  orderList?: IOrderListType[]
  orderFilter?: IOrderFilter[]
}

export interface IOrderListType {
  id: 44
  order_number: string
  created_at: string
  orderStatus: string
  orderProductInfo: IOrderProductInfoType[]
  addressInfo: IAddressInfoType
}

export interface IOrderProductInfoType {
  price: number
  quantity: number
  optionInfo: IOptionInfoType
  productName: string
  orderProductId: number
  thumbnail: string
  trackingNumber: string
  shipment_status: string
  shippingCompany: string
}

export interface IOptionInfoType {
  size: string
  colorName: string
}

export interface IAddressInfoType {
  phone: string
  address: string
  userName: string
  zip_code: string
  detail_address: string
}

export interface IOrderFilter {
  id: number
  name: string
  filter: string
}

export interface IMypageItemPropsType {
  itemData?: IItemDataType
  mainData?: IMainDataType
}

export interface IMypageFilterListPropsType {
  itemData?: IItemDataType
  mainData?: IMainDataType
}

export interface IMainDataType {
  orderStatus: IOrderStatusType
  orderCountByStatus: IOrderCountByStatus
  orderHistory: IOrderListType[]
}

export interface IOrderStatusType {
  orderStatusId: number
  orderStatusName: string
}

export interface IOrderCountByStatus {
  orderStatusId: number
  statusName: string
  countStatus: string
}

// whisList type

export interface IWishListDataType {
  id: number
  name: string
  thumbnail: string
  price: number
  productId: number
  userId: number
  optionId: number
  color: IWishListDataColorType[]
}

export interface IWishListDataColorType {
  size: null
  colorId: string
  colorName: string
}

export interface IWishListItemPropsType {
  wishListData: IWishListDataType[]
  selectStateHandler: (selectValue: string) => void
}
