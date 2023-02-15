import Address from '../../../../common/utils/address/Address'
import { IOrderPostPropsType } from '../Order.type'
import * as S from './OrderPost.style'

const OrderPost = (props: IOrderPostPropsType) => {
    return (
        <S.Contain>
            {/* <S.RadioBox>
                <S.RadioInput type='radio' name='select' id='default' checked />
                <S.RadioLabel htmlFor='default'>주문자 정보와 동일</S.RadioLabel>
                <S.RadioInput type='radio' name='select' id='new' />
                <S.RadioLabel htmlFor='new'>새로운 배송지</S.RadioLabel>
            </S.RadioBox> */}
            <div>
                <Address
                    orderData={props.orderData}
                    zipCodeChangeHandler={props.zipCodeChangeHandler}
                    addressChangeHandler={props.addressChangeHandler}
                    detailAddressChangeHandler={props.detailAddressChangeHandler}
                    phone={props.phone}
                    name={props.name}
                />
                <S.SelectContain>
                    <S.PostMessageSelect name='message_state'>
                        <option>-- 메시지 선택 (선택사항) --</option>
                        <option value='배송전에 미리 연락바랍니다'>배송전에 미리 연락바랍니다.</option>
                        <option value='부재 시 경비실에 맡겨주세요'>부재 시 경비실에 맡겨주세요.</option>
                        <option value='부재 시 문 앞에 놓아주세요'>부재 시 문 앞에 놓아주세요.</option>
                        <option value='빠른 배송 부탁드립니다'>빠른 배송 부탁드립니다.</option>
                        <option value='택배함에 보관해 주세요'>택배함에 보관해 주세요.</option>
                        <option value='직접입력'>직접입력</option>
                    </S.PostMessageSelect>
                    {/* {props.orderPostData.message_state === '직접입력' &&
                        <S.SelfInput type='text' name='post_message' onChange={props.changeHandler} />
                    } */}
                </S.SelectContain>
            </div>
        </S.Contain>
    )
}

export default OrderPost