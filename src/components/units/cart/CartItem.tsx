import axios from 'axios'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { API_IP } from '../../../common/utils/ApiIp'
import CartOptionModal from '../../../common/utils/optionModal/OptionModal'
import * as S from './CartItem.style'
import { ICartItemType } from './CartItem.type'

const CartItem = (props: ICartItemType) => {
    const { cartItem, checkedHandler, checkedState, modalHandler, optionModal, colorIdHandler, colorIdState, SelectDeleteClick, addCountHandler, minusCountHandler, setOptionChangeMessage } = props

    const router = useRouter()

    // message state
    const [wishMessage, setWishMessage] = useState<string>('')

    // wishlist add function
    const wishListHandler = async (productId: number, optionId: number) => {
        try {
            setWishMessage('')
            await axios.post(`http://${API_IP}:3000/like`, {
                productId,
                optionId
            }, {
                headers: {
                    'authorization': `${localStorage.getItem('access_token')}`
                }
            })
                .then(res => {
                    const { data } = res
                    if (data === 'SUCCESS') {
                        setWishMessage(data)
                        alert('해당 상품이 위시리스트로 이동되었습니다.')
                    }
                    if (data === 'DELETE') {
                        setWishMessage(data)
                        alert('해당 상품이 위시리스트에서 삭제 되었습니다.')
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    // cartItem move in order
    const cartItemMoveHandler = (cartId: number) => {
        router.push(`/order/optionId=&quantity=&cartItem=${cartId}`)
    }

    useEffect(() => { }, [wishMessage])

    return (
        <>
            {cartItem.map((el) => {
                return (
                    <Fragment key={el.cartId}>
                        <S.Contain>
                            <S.ItemCheckBox>
                                <input
                                    type='checkbox'
                                    id={el.cartId}
                                    onChange={(event) => { checkedHandler(event, el.cartId); }}
                                    checked={!!checkedState.includes(el.cartId)}
                                />
                            </S.ItemCheckBox>
                            <S.ItemItemInforMation>
                                <S.ItemImgBox>
                                    <S.ItemImg src={el.imgUrl} alt={el.imgUrl} />
                                </S.ItemImgBox>
                                <S.ItemInformationBox>
                                    <S.ItemInformation>{`${el.name} (${el.colorName})`}</S.ItemInformation>
                                    <S.ItemInformation>{`[옵션: (${el.quantity})/${el.size.name}]`}</S.ItemInformation>
                                    <S.ItemInformationChange onClick={() => { modalHandler(el.optionId); }}>옵션변경</S.ItemInformationChange>
                                    {
                                        optionModal === el.optionId
                                        &&
                                        <CartOptionModal
                                            modalHandler={modalHandler}
                                            colorProps={el.color}
                                            colorIdHandler={colorIdHandler}
                                            colorIdState={colorIdState}
                                            cartId={Number(el.cartId)}
                                            setOptionChangeMessage={setOptionChangeMessage}
                                        />
                                    }
                                </S.ItemInformationBox>
                            </S.ItemItemInforMation>
                            <S.ItemCount>
                                <S.ItemCountButton
                                    id={el.cartId}
                                    value={el.quantity}
                                    onClick={() => { minusCountHandler(el.quantity, Number(el.cartId)); }}
                                >
                                    -
                                </S.ItemCountButton>
                                <S.ItemCountText>{el.quantity}</S.ItemCountText>
                                <S.ItemCountButton
                                    id={el.cartId}
                                    value={el.quantity}
                                    onClick={() => { addCountHandler(el.quantity, Number(el.cartId)); }}
                                >
                                    +
                                </S.ItemCountButton>
                            </S.ItemCount>
                            <S.ItemSavings>
                                <span>-</span>
                            </S.ItemSavings>
                            <S.ItemPost>
                                <S.ItemPostText>기본배송</S.ItemPostText>
                            </S.ItemPost>
                            <S.ItemPostPrice>
                                <S.ItemPostPriceText>무료</S.ItemPostPriceText>
                            </S.ItemPostPrice>
                            <S.ItemTotalPrice>
                                <S.ItemTotalPriceText>{el.price}</S.ItemTotalPriceText>
                            </S.ItemTotalPrice>
                            <S.ItemChoose>
                                <S.ItemChooseButton
                                    onClick={() => { cartItemMoveHandler(Number(el.cartId)); }}
                                >
                                    주문하기
                                </S.ItemChooseButton>
                                <S.ItemChooseButton
                                    onClick={async () => { await wishListHandler(el.productId, Number(el.optionId)); }}
                                >
                                    관심상품
                                </S.ItemChooseButton>
                                <S.ItemChooseButton value={el.cartId} onClick={() => { SelectDeleteClick(el.cartId); }}>삭제</S.ItemChooseButton>
                            </S.ItemChoose>
                        </S.Contain>
                    </Fragment>
                )
            })
            }
        </>
    )
}

export default CartItem