import { IOrderItemPropsType } from '../Order.type'
import * as S from './Orderer.style'


const Orderer = (props: IOrderItemPropsType) => {

    return (
        <S.OrderWirterContain>
            <S.UserBox>
                <S.UserLabel htmlFor='user'>주문자</S.UserLabel>
                <S.UserInput
                    id='user'
                    type='text'
                    name='writer'
                    defaultValue={props.orderData?.userInfo?.name ?? ''}
                    onChange={(e) => { props.nameChangehandler(e.target.value); }}
                />
            </S.UserBox>
            <S.EmailContain>
                <S.EmailBox>
                    <S.EmailLabel htmlFor='email'>이메일</S.EmailLabel>
                    <S.EmailInput
                        id='email'
                        type='text'
                        name='email'
                        defaultValue={props.orderData?.userInfo?.email ?? ''}
                        readOnly
                    />
                </S.EmailBox>
                <S.EmailDescribedBox>
                    <S.EmailDescribed>이메일로 주문 처리 과정을 보내드립니다.</S.EmailDescribed>
                    <S.EmailDescribed>수신 가능한 이메일 주소를 입력해 주세요.</S.EmailDescribed>
                </S.EmailDescribedBox>
            </S.EmailContain>
            <S.PhoneContain>
                <S.PhoneLabel htmlFor='phone'>휴대전화</S.PhoneLabel>
                <S.PhoneEndInput
                    type='text'
                    name='phone_number'
                    defaultValue={props.orderData?.userInfo?.phone ?? ''}
                    onChange={(e) => { props.phoneChangeHandler(e.target.value); }}
                />
            </S.PhoneContain>
        </S.OrderWirterContain>
    )
}

export default Orderer