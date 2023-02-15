import { ChangeEvent } from "react"

export interface IOrderInfoType {
  cartId: number
  color: string
  name: string
  priceByProduct: string
  quantity: number
  size: string
  thumbnail: string
}

export interface IOrderItemPropsDataType {
  orderData?: IOrderDataType
}

export interface IOrderPostPropsType {
  orderData?: IOrderDataType
  zipCodeChangeHandler: (zipCode: string) => void
  addressChangeHandler: (address: string) => void
  detailAddressChangeHandler: (detailAddress: string) => void
  phone: string
  name: string
}

export interface IAddressPropsType {
  orderData?: IOrderDataType
  zipCodeChangeHandler: (zipCode: string) => void
  addressChangeHandler: (address: string) => void
  detailAddressChangeHandler: (detailAddress: string) => void
  phone: string
  name: string
}

export interface IOrderPostDataType {
  writer: string
  email: string
  phone_number: string
  post_writer: string
  post_zip_code: string
  post_address: string
  post_detail_address: string
  post_phone_number: string
  post_message: string
  message_state: string
}

export interface IOrderItemPropsType {
  orderData?: IOrderDataType
  nameChangehandler: (value: string) => void
  phoneChangeHandler: (value: string) => void
}

export interface IOrderDataType {
  userInfo?: IUserInfoType
  orderInfo?: IOrderInfoType[]
}

export interface IUserInfoType {
  address?: null
  detail_address?: null
  email: string
  name: string
  phone: string
  points: string
  zip_code?: null
}
