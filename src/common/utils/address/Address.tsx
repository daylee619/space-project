import { useState } from 'react'
import DaumPostcodeEmbed from 'react-daum-postcode'
import { IAddressPropsType } from '../../../components/units/order/Order.type'
import * as S from './Address.style'

const Address = (props: IAddressPropsType) => {
    const [addressSearch, setAddressSearch] = useState(false)
    const [postData, setPostData] = useState<any>(null)
    const searchStateHandler = () => {
        setAddressSearch(prv => !prv)
    }

    const postDataHandler = (data: any) => {
        setPostData(data)
        setAddressSearch(prv => !prv)
    }

    return (
        <>
            <S.UserBox>
                <S.UserLabel>받는사람</S.UserLabel>
                <S.UserInput
                    type='text'
                    name='post_writer'
                    value={props.orderPostData.post_writer ? props.orderPostData.post_writer : props.orderData.userInfo?.name}
                    onChange={props.changeHandler}
                />
            </S.UserBox>
            <S.ZipCodeBox>
                <S.ZipCodeLabel>주소</S.ZipCodeLabel>
                <S.ZipCode
                    value=
                    {
                        postData?.zonecode
                            ?
                            postData?.zonecode
                            :
                            props.orderData.userInfo?.zip_code
                    }
                    name='post_zip_code'
                    onChange={props.changeHandler}
                />
                <S.AddressSearchButton onClick={searchStateHandler}>주소검색</S.AddressSearchButton>
                {
                    addressSearch
                    &&
                    <S.DaumPostBox>
                        <S.PostTitleBox>
                            <S.PostTitleH>
                                주소검색
                            </S.PostTitleH>
                            <S.PostTitleX onClick={searchStateHandler}>
                                x
                            </S.PostTitleX>
                        </S.PostTitleBox>
                        <div>
                            <DaumPostcodeEmbed onComplete={postDataHandler} />
                        </div>
                    </S.DaumPostBox>
                }
            </S.ZipCodeBox>
            <S.DefAddressInput
                type='text'
                name='post_address'
                value={postData?.address ? postData.address : props.orderData.userInfo?.address} placeholder='기본주소'
                onChange={props.changeHandler}
            />
            <S.NewAddressInput
                type='text'
                placeholder='상세 주소'
                name='post_detail_address'
                value={props.orderPostData.post_detail_address ? props.orderPostData.post_detail_address : props.orderData.userInfo?.detail_address}
                onChange={props.changeHandler} />
            <S.PhoneContain>
                <S.PhoneLabel htmlFor='phone'>휴대전화</S.PhoneLabel>
                {/* <S.PhoneSelect id='phone'>
                    <option value='010' defaultChecked>010</option>
                    <option value='011'>011</option>
                    <option value='016'>016</option>
                </S.PhoneSelect>
                <S.PhoneSign>-</S.PhoneSign>
                <S.PhoneMiddleInput type='text' />
                <S.PhoneSign>-</S.PhoneSign> */}
                <S.PhoneEndInput
                    type='text'
                    name='post_phone_number'
                    value={props.orderPostData.post_phone_number ? props.orderPostData.post_phone_number : props.orderData.userInfo?.phone}
                    onChange={props.changeHandler}
                />
            </S.PhoneContain>
        </>
    )
}

export default Address