import { Fragment, useState } from 'react';
import CartCompleteModal from '../../../../../common/utils/optionModal/wishListOptionModal/CartCompleteModal';
import WishListOptionModal from '../../../../../common/utils/optionModal/wishListOptionModal/OptionModal';
import PlusOptionModal from '../../../../../common/utils/optionModal/wishListOptionModal/PlusOptionModal';
import { IWishListItemPropsType } from '../../Mypage.type';
import * as S from './WishListItem.style'

const WishListItem = (props: IWishListItemPropsType) => {
    const { wishListData, selectStateHandler, handleSingleCheck, checkItems, selectState } = props
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

    return (
        <>
            {
                wishListData.map(el =>
                    <S.Contain key={el.id}>
                        <S.ItemCheckBox>
                            <input
                                type='checkbox'
                                id={(el.id).toString()}
                                onChange={(event) => { handleSingleCheck(event.target.checked, el.id); }}
                                checked={!!checkItems.includes(el.id)}
                            />
                        </S.ItemCheckBox>
                        <S.ItemItemInforMation>
                            <S.ItemImgBox>
                                <S.ItemImg src={el.thumbnail} alt={el.name} />
                            </S.ItemImgBox>
                            <S.ItemInformationBox>
                                <S.ItemInformation>{`${el.name} (${el.colorName})`}</S.ItemInformation>
                                <S.ItemInformation>
                                    {
                                        (el.size.id !== null && el.size.name !== null)
                                        &&
                                        <S.ItemPlusOption>
                                            {`[옵션: (${el.size.id})/${el.size.name}]`}
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
                            <S.ItemChooseButton>주문하기</S.ItemChooseButton>
                            <S.ItemChooseButton onClick={() => { plusModalHandler(el.optionId); }}>장바구니</S.ItemChooseButton>
                            {
                                (
                                    plusModalState.includes(el.optionId)
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
                                    plusModalState.includes(el.optionId)
                                    &&
                                    el.optionId !== null
                                )
                                &&
                                <CartCompleteModal
                                    element={el}
                                    plusModalHandler={plusModalHandler}
                                />
                            }
                            <S.ItemChooseButton>삭제</S.ItemChooseButton>
                        </S.ItemChoose>
                    </S.Contain>
                )
            }
        </>
    )
}

export default WishListItem