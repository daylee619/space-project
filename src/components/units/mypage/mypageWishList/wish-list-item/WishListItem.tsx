import { Fragment } from 'react';
import { IWishListItemPropsType } from '../../Mypage.type';
import * as S from './WishListItem.style'

const WishListItem = (props: IWishListItemPropsType) => {
    const { wishListData, selectStateHandler } = props

    return (
        <>
            {
                wishListData.map(el =>
                    <Fragment key={el.id} >
                        <S.Contain>
                            <S.ItemCheckBox>
                                <input
                                    type='checkbox'
                                    id={(el.id).toString()}
                                    onChange={(event) => { checkedHandler(event, el.cartId); }}
                                    checked={!checkedState.includes(el.cartId)}
                                />
                            </S.ItemCheckBox>
                            <S.ItemItemInforMation>
                                <S.ItemImgBox>
                                    <S.ItemImg src={el.thumbnail} alt={el.name} />
                                </S.ItemImgBox>
                                <S.ItemInformationBox>
                                    <S.ItemInformation>{`${el.name} (${el.colorName})`}</S.ItemInformation>
                                    <S.ItemInformation>{`[옵션: (${el.quantity})/${el.size.name}]`}</S.ItemInformation>
                                    <S.ItemInformationChange onClick={modalHandler}>옵션변경</S.ItemInformationChange>
                                    {/* {
                                        optionModal
                                        &&
                                        <CartOptionModal
                                            modalHandler={modalHandler}
                                            selectStateHandler={selectStateHandler}
                                            colorProps={el.color}
                                            colorIdHandler={colorIdHandler}
                                            colorIdState={colorIdState}
                                        />
                                    } */}
                                </S.ItemInformationBox>
                            </S.ItemItemInforMation>
                            <S.ItemCount>
                                <S.ItemCountButton
                                    id={(el.id).toString()}
                                    value={el.quantity}
                                    onClick={minusCountHandler}
                                >
                                    -
                                </S.ItemCountButton>
                                <S.ItemCountText>{el.quantity}</S.ItemCountText>
                                <S.ItemCountButton
                                    id={el.cartId}
                                    value={el.quantity}
                                    onClick={addCountHandler}
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
                                <S.ItemChooseButton>주문하기</S.ItemChooseButton>
                                <S.ItemChooseButton>관심상품</S.ItemChooseButton>
                                <S.ItemChooseButton value={el.cartId} onClick={SelectDeleteClick}>삭제</S.ItemChooseButton>
                            </S.ItemChoose>
                        </S.Contain>
                    </Fragment >
                )
            }
        </>
    )
}

export default WishListItem