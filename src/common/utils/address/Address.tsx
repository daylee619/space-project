import { useEffect, useState } from 'react'
import DaumPostcodeEmbed from 'react-daum-postcode'
import { IAddressPropsType } from '../../../components/units/order/Order.type'
import * as S from './Address.style'

const Address = (props: IAddressPropsType) => {
    const [addressSearch, setAddressSearch] = useState(false)
    const [postData, setPostData] = useState<any>(null)
    console.log(postData)
    const searchStateHandler = () => {
        setAddressSearch(prv => !prv)
    }

    const postDataHandler = (data: any) => {
        setPostData(data)
        setAddressSearch(prv => !prv)
    }
    useEffect(() => {
        props.zipCodeChangeHandler(postData?.zonecode)
        props.addressChangeHandler(postData?.address)
    }, [postData])

    return (
        <>
            <S.UserBox>
                <S.UserLabel>받는사람</S.UserLabel>
                <S.UserInput
                    type='text'
                    name='post_writer'
                    value={props.name ? props.name : props.orderData?.userInfo?.name}
                    readOnly
                />
            </S.UserBox>
            <S.ZipCodeBox>
                <S.ZipCodeLabel>주소</S.ZipCodeLabel>
                <S.ZipCode
                    value={postData?.zonecode ?? ""}
                    name='post_zip_code'
                    readOnly
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
                            <DaumPostcodeEmbed onComplete={(data) => { postDataHandler(data); }} />
                        </div>
                    </S.DaumPostBox>
                }
            </S.ZipCodeBox>
            <S.DefAddressInput
                type='text'
                name='post_address'
                value={postData?.address ?? ""}
                placeholder='기본주소'
                readOnly
            />
            <S.NewAddressInput
                type='text'
                placeholder='상세 주소'
                name='post_detail_address'
                onChange={(e) => { props.detailAddressChangeHandler(e.target.value); }}
            />
            <S.PhoneContain>
                <S.PhoneLabel htmlFor='phone'>휴대전화</S.PhoneLabel>
                <S.PhoneEndInput
                    type='text'
                    name='post_phone_number'
                    value={props.phone ? props.phone : props.orderData?.userInfo?.phone}
                    readOnly
                />
            </S.PhoneContain>
        </>
    )
}

export default Address