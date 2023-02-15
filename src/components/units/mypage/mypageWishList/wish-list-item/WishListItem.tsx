import axios from 'axios';
import { Fragment, useState } from 'react';
import { API_IP } from '../../../../../common/utils/ApiIp';
import CartCompleteModal from '../../../../../common/utils/optionModal/wishListOptionModal/CartCompleteModal';
import WishListOptionModal from '../../../../../common/utils/optionModal/wishListOptionModal/OptionModal';
import PlusOptionModal from '../../../../../common/utils/optionModal/wishListOptionModal/PlusOptionModal';
import { IWishListItemPropsType } from '../../Mypage.type';
import * as S from './WishListItem.style'

const WishListItem = (props: IWishListItemPropsType) => {
    const { wishListData, selectStateHandler, selectState, setWishItemDeleteMessage, setOptionChangeMessage, setAlreadyOptionMessage, alreadyOptionMessage } = props
    const [optionModal, setOptionModal] = useState<number[]>([])


    const modalHandler = (id: number) => {
        if (!optionModal.includes(id)) {
            setOptionModal(prv => [...prv, id])
        }
        if (optionModal.includes(id)) {
            setOptionModal(optionModal.filter(el => el !== id))
        }
    }

    const [plusModalState, setPlusModalState] = useState<number[]>([])


    const plusModalHandler = (id: number) => {
        if (!plusModalState.includes(id)) {
            setPlusModalState(prv => [...prv, id])
        }
        if (plusModalState.includes(id)) {
            setPlusModalState(plusModalState.filter(el => el !== id))
        }

    }

    // delete wishList Item
    const deleteWishItemHandler = async (likeId: number) => {
        try {
            setWishItemDeleteMessage('')
            await axios.delete(`http://${API_IP}:3000/like?likeId=${likeId}`, {
                headers: {
                    'authorization': localStorage.getItem('access_token')
                }
            })
                .then(res => {
                    const { data } = res
                    if (data) {
                        setWishItemDeleteMessage(data.message)
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    // already option in wishItem -> In cart
    const alreadyOptionWishItemIncart = async (optionId: number) => {
        try {
            if (optionId !== null) {
                setAlreadyOptionMessage('')
                const cartItem = []
                cartItem.push(
                    {
                        optionId,
                        quantity: 1
                    }
                )
                await axios.post(`http://${API_IP}:3000/cart`, {
                    cartItem
                }, {
                    headers: {
                        'authorization': localStorage.getItem('access_token')
                    }
                })
                    .then(res => {
                        const { data } = res
                        if (data.message === 'success') {
                            setAlreadyOptionMessage(data.message)
                        }
                    })
            }
        } catch (error) {
            console.log(error)
        }
    }

    // already option in wishItem -> In Order
    const alreadyOptionWishItemInOrder = (optionId: number) => {

    }

    return (
        <>
            {
                wishListData.map(el =>
                    <S.Contain key={el.id}>
                        {/* <S.ItemCheckBox>
                            <input
                                type='checkbox'
                                id={(el.id).toString()}
                                onChange={(event) => { handleSingleCheck(event.currentTarget.checked, el.id); }}
                                checked={checkItems.includes(el.id)}
                            />
                        </S.ItemCheckBox> */}
                        <S.ItemItemInforMation>
                            <S.ItemImgBox>
                                <S.ItemImg src={el.thumbnail} alt={el.name} />
                            </S.ItemImgBox>
                            <S.ItemInformationBox>
                                <S.ItemInformation>{`${el.name} (${el.colorName})`}</S.ItemInformation>
                                <S.ItemInformation>
                                    {
                                        (el?.size?.id !== null && el?.size?.name !== null)
                                        &&
                                        <S.ItemPlusOption>
                                            {`[옵션: (${el?.size?.id})/${el?.size?.name}]`}
                                        </S.ItemPlusOption>
                                    }
                                </S.ItemInformation>
                                <S.ItemInformationChange onClick={() => { modalHandler(el.id); }}>옵션변경</S.ItemInformationChange>
                                {
                                    optionModal.includes(el.id)
                                    &&
                                    <WishListOptionModal
                                        modalHandler={modalHandler}
                                        colorProps={el.color}
                                        selectStateHandler={selectStateHandler}
                                        selectState={selectState}
                                        nameProps={el.name}
                                        idProps={el.id}
                                        productId={el.productId}
                                        setOptionChangeMessage={setOptionChangeMessage}
                                    />
                                }
                            </S.ItemInformationBox>
                        </S.ItemItemInforMation>
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
                                onClick={() => {
                                    plusModalHandler(el.id);
                                    alreadyOptionWishItemInOrder(el.optionId)
                                }
                                }
                            >
                                주문하기
                            </S.ItemChooseButton>
                            <S.ItemChooseButton
                                onClick={() => {
                                    plusModalHandler(el.id);
                                    alreadyOptionWishItemIncart(el.optionId)
                                }
                                }
                            >
                                장바구니
                            </S.ItemChooseButton>
                            {
                                (
                                    plusModalState.includes(el.id)
                                    &&
                                    el.optionId === null
                                )
                                &&
                                <PlusOptionModal
                                    element={el}
                                    plusModalHandler={plusModalHandler}
                                />
                            }
                            {
                                (
                                    plusModalState.includes(el.id)
                                    &&
                                    el.optionId !== null
                                    &&
                                    alreadyOptionMessage === "success"
                                )
                                &&
                                <CartCompleteModal
                                    element={el}
                                    plusModalHandler={plusModalHandler}
                                />
                            }
                            <S.ItemChooseButton
                                onClick={async () => { await deleteWishItemHandler(el.id); }}
                            >
                                삭제
                            </S.ItemChooseButton>
                        </S.ItemChoose>
                    </S.Contain>
                )
            }
        </>
    )
}

export default WishListItem