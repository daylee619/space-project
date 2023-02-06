import { ChangeEvent } from "react"

export interface IOrderInfoType {
  cartId: number
  name: string
  thumbnail: string
  priceByProduct: string
  quantity: number
  color: string
  size: string
}

export interface IOrderPostPropsType {
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  selectHandler: (e: ChangeEvent<HTMLSelectElement>) => void
  orderPostData: IOrderPostDataType
  orderData: IOrderDataType
}

export interface IAddressPropsType {
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  orderPostData: IOrderPostDataType
  orderData: IOrderDataType
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
  orderData: IOrderDataType
  orderPostData: IOrderPostDataType
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface IOrderDataType {
  userInfo?: IUserInfoType
  orderInfo?: IOrderInfoType[]
}

export interface IUserInfoType {
  name: string
  email: string
  phone: string
  points: string
  address?: string
  detail_address?: string
  zip_code?: string
}
