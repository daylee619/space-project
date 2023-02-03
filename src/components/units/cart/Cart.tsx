import CartItem from './CartItem'
import * as S from './Cart.style'
import { ChangeEvent, MouseEvent, MouseEventHandler, useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'


interface ICartItemInType {
    cartId: string,
    optionId: number,
    quantity: number,
    sizeName: string,
    colorName: string,
    productId: number,
    name: string,
    price: number,
    size: ISizeType,
    color: IColorType[],
    imgUrl: string
}

interface ISizeType {
    name: string
}

interface IColorType {
    colorId: number,
    colorName: string,
    options: IOptionsType[]
}

interface IOptionsType {
    size: string,
    stock: string,
    optionId: string
}

const Cart = () => {
    // data state
    const [cartItem, setCartItem] = useState<ICartItemInType[]>([])
    // price data state
    const [totalPrice, setTotalPrice] = useState(0)
    // checked state
    const [checkedState, setCheckedState] = useState<string[]>([])
    // modal state
    const [optionModal, setOptionModal] = useState(false)
    // option color ID state
    const [colorIdState, setColorState] = useState<string>('')

    const router = useRouter()

    // checkbox function
    const checkedHandler = (event: ChangeEvent<HTMLInputElement>, id: string) => {
        if (event.target.checked) {
            // 단일 선택 시 체크된 아이템을 배열에 추가 
            setCheckedState((prev: string[]) => [...prev, id])
        } else {
            // 단일 선택 해제 시 체크된 아이템을 제외한 배열
            setCheckedState(checkedState.filter(el => el !== id))
        }
    }

    const handleAllCheck = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const idArray: string[] = []
            cartItem.forEach((el: ICartItemInType) => idArray.push(el.cartId))
            setCheckedState(idArray)
        } else {
            setCheckedState([])
        }
    }

    // 데이터 받아오기
    const cartItemgetHandler = async () => {
        await axios.get('/data/cart.json')
            .then(res => {
                const { data } = res
                setCartItem(data);
                setTotalPrice(data.reduce((acc: number, cur: ICartItemInType) => cur.price + acc, 0))
            })
            .catch(error => { console.log(error); })
    }

    useEffect(() => {
        cartItemgetHandler();
    }, [])


    // Modal Otion Function
    const modalHandler = () => {
        setOptionModal(!optionModal)
    }

    // Option & Color ID Choose 
    const colorIdHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setColorState(e.target.value)
    }

    // chooes check delete
    const SelectCheckDeleteClick = async () => {
        try {
            await axios.post('api', {
                cartId: checkedState
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "userId": "userId"
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    const SelectDeleteClick = async (e: { target: { value: string } }) => {
        try {
            await axios.post('api', {
                cartId: e.target.value
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "userId": 'UserId'
                }
            }
            )
        } catch (error) {
            console.log(error)
        }
    }

    // all cartItem delete
    const AllItemDeleteClick = async () => {
        try {
            await axios.post('api', {
                userId: 'userId'
            }, {
                headers: {
                    "Content-Type": "application",
                    "userId": 'userId'
                }
            }
            )
        } catch (error) {
            console.log(error)
            console.error(error)
        }
    }

    // Count Add & Minus
    const addCountHandler = async (e: { target: { value: string, id: string } }) => {
        try {
            await axios.post('api', {
                quantity: Number(e.target.value) + 1,
                cartId: e.target.id,
            }, {
                headers: {
                    "Content-Type": "application",
                    "userId": "userId"
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    const minusCountHandler = async (e: any) => {
        try {
            if (Number(e.target.value) > 1) {
                await axios.post('api', {
                    quantity: Number(e.target.value) - 1,
                    cartId: e.target.id,
                }, {
                    headers: {
                        "Content-Type": "application",
                        "userId": "userId"
                    }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <S.Contain>
            <S.ContainIn>
                <S.CartTitleBox>
                    <S.CartTitle>장바구니</S.CartTitle>
                </S.CartTitleBox>
                <S.CartItemContain>
                    {!cartItem && <S.EmptiedCart>장바구니에 등록된 상품이 없습니다.</S.EmptiedCart>}
                    {cartItem &&
                        <>
                            <S.CartItemTitleBox>
                                <S.CartItemTitleBoxIn>
                                    <S.TitleCheckBox>
                                        <input type='checkbox' onChange={handleAllCheck} checked={checkedState.length === cartItem.length} />
                                    </S.TitleCheckBox>
                                    <S.TitleItemInforMation>
                                        상품정보
                                    </S.TitleItemInforMation>
                                    <S.TitleCount>
                                        수량
                                    </S.TitleCount>
                                    <S.TitleSavings>
                                        적립금
                                    </S.TitleSavings>
                                    <S.TitlePost>
                                        배송구분
                                    </S.TitlePost>
                                    <S.TitlePostPrice>
                                        배송비
                                    </S.TitlePostPrice>
                                    <S.TitleTotalPrice>
                                        합계
                                    </S.TitleTotalPrice>
                                    <S.TitleChoose>
                                        선택
                                    </S.TitleChoose>
                                </S.CartItemTitleBoxIn>
                            </S.CartItemTitleBox>
                            <CartItem
                                cartItem={cartItem}
                                checkedHandler={checkedHandler}
                                checkedState={checkedState}
                                modalHandler={modalHandler}
                                optionModal={optionModal}
                                colorIdHandler={colorIdHandler}
                                colorIdState={colorIdState}
                                SelectDeleteClick={SelectDeleteClick}
                                addCountHandler={addCountHandler}
                                minusCountHandler={minusCountHandler}
                            />
                            <S.CartItemConfirmBox>
                                <div>
                                    <S.ItemButton onClick={SelectCheckDeleteClick}>선택상품 삭제</S.ItemButton>
                                </div>
                                <div>
                                    <S.CartAllDelete onClick={AllItemDeleteClick}>장바구니비우기</S.CartAllDelete>
                                    <S.ItemButton>견적서 출력</S.ItemButton>
                                </div>
                            </S.CartItemConfirmBox>
                        </>
                    }
                </S.CartItemContain>
                <S.PostWayBox>
                    <S.PostWayText>
                        배송방법
                    </S.PostWayText>
                    <S.PostWayButtonBox>
                        <S.PostWayButton>택배</S.PostWayButton>
                    </S.PostWayButtonBox>
                </S.PostWayBox>
                {cartItem &&
                    <>
                        <S.PriceContain>
                            <S.UnderPriceBox>
                                <S.TextSpan>총 상품금액</S.TextSpan>
                                <S.CountSpan >{totalPrice}</S.CountSpan >
                            </S.UnderPriceBox>
                            <S.Sign>+</S.Sign>
                            <S.UnderPriceBox>
                                <S.TextSpan>총 배송비</S.TextSpan>
                                <S.CountSpan >0</S.CountSpan >
                            </S.UnderPriceBox>
                            <S.Sign>=</S.Sign>
                            <S.UnderPriceBox>
                                <S.TextSpan>결제예정금액</S.TextSpan>
                                <S.CountSpan >{totalPrice}</S.CountSpan >
                            </S.UnderPriceBox>
                        </S.PriceContain>
                    </>
                }
                <S.ConfirmBox>
                    <S.ChoiseConfirm>선택상품주문</S.ChoiseConfirm>
                    <S.KeepGoingConfirm>쇼핑계속하기</S.KeepGoingConfirm>
                    <S.AllChoiseConfirm
                        onClick={async () => await router.push('/order')}
                    >전체상품주문</S.AllChoiseConfirm>
                </S.ConfirmBox>
            </S.ContainIn>
        </S.Contain>
    )
}

export default Cart