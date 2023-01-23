import { IOrderItemPropsType } from '../Order.type'
import * as S from './Orderer.style'


const Orderer = (props: IOrderItemPropsType) => {
    // const [email, setEmail] = useState<string | undefined>('')

    // const emailHandler = () => {
    //     const temp = props.orderData.userInfo?.email
    //     setEmail(temp?.slice(0, temp.indexOf('@')))
    // }

    // useEffect(() => {
    //     emailHandler()
    // }, [])

    return (
        <S.OrderWirterContain>
            <S.UserBox>
                <S.UserLabel htmlFor='user'>주문자</S.UserLabel>
                <S.UserInput
                    id='user'
                    type='text'
                    name='writer'
                    value={props.orderPostData.writer ? props.orderPostData.writer : props.orderData.userInfo?.name}
                    onChange={props.changeHandler}
                />
            </S.UserBox>
            <S.EmailContain>
                <S.EmailBox>
                    <S.EmailLabel htmlFor='email'>이메일</S.EmailLabel>
                    <S.EmailInput
                        id='email'
                        type='text'
                        name='email'
                        value={props.orderPostData.email ? props.orderPostData.email : props.orderData.userInfo?.email}
                        onChange={props.changeHandler}
                    />
                    {/* <S.EmailSign>@</S.EmailSign>
                    <S.EmailSelecte onChange={props.emailInputHandler}>
                        <S.EmailOption value='naver.com'>naver.com</S.EmailOption>
                        <S.EmailOption value='nate.com'>nate.com</S.EmailOption>
                        <S.EmailOption value='daum.net'>daum.net</S.EmailOption>
                        <S.EmailOption value='gamil.com'>gamil.com</S.EmailOption>
                    </S.EmailSelecte> */}
                </S.EmailBox>
                <S.EmailDescribedBox>
                    <S.EmailDescribed>이메일로 주문 처리 과정을 보내드립니다.</S.EmailDescribed>
                    <S.EmailDescribed>수신 가능한 이메일 주소를 입력해 주세요.</S.EmailDescribed>
                </S.EmailDescribedBox>
            </S.EmailContain>
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
                    name='phone_number'
                    value={props.orderPostData.phone_number ? props.orderPostData.phone_number : props.orderData.userInfo?.phone}
                    onChange={props.changeHandler}
                />
            </S.PhoneContain>
        </S.OrderWirterContain>
    )
}

export default Orderer