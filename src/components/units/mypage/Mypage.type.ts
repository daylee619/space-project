export interface IItemDataType {
  orderList: IOrderListType[]
  orderFilter: IOrderFilter[]
}

export interface IOrderListType {
  id: number
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
  orderCountByStatus: IOrderCountByStatus[]
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
  size: {
    id: number
    name: string
  }
  colorName: string
  color: IWishListDataColorType[]
}

export interface IWishListDataColorType {
  size: IWishListDataSizeType[] | null
  colorId: string
  colorName: string
}

export interface IWishListDataSizeType {
  stock: string
  sizeId: string
  sizeName: string
}

// wish-list-item type
export interface IWishListItemPropsType {
  wishListData: IWishListDataType[]
  selectStateHandler: (selectValue: string) => void
  // handleAllCheck: (checked: boolean) => void
  // handleSingleCheck: (checked: boolean, id: number) => void
  // checkItems: number[]
  selectState: string
}

// wish-list-option-modal-type
export interface IOptionPropsType {
  modalHandler: (id: number) => void
  colorProps: IWishListDataColorType[]
  selectStateHandler: (selectValue: string) => void
  selectState: string
  nameProps: string
  idProps: number
}

export interface IMypageUserModifyDefaultDataType {
  email: string
  birthday: Date
  nickname: string
  thumbnail: string
  gender: string
  phone: string
  name: string
}

export interface IPlusOptionModalPropsType {
  element: IWishListDataType
  plusModalHandler: (id: number) => void
}

export interface IMypageCartConfirmModalPropsType {
  element: IWishListDataType
  plusModalHandler: (id: number) => void
}

// mypage review type
export interface IWritedReviewDataType {
  id: number
  productId: number
  thumbnail: string
  title: string
  content: string
  created_at: string
  updated_at: string
  star: number
}

export interface IWritedUserReveiwPropsType {
  writedData: IWritedReviewDataType[]
}
