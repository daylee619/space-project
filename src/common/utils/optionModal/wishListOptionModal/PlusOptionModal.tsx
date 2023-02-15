import axios from 'axios'
import { Fragment, useState } from 'react'
import { IPlusOptionModalPropsType } from '../../../../components/units/mypage/Mypage.type'
import { API_IP } from '../../ApiIp'
import * as S from './PlusOptionModal.style'

const PlusOptionModal = (props: IPlusOptionModalPropsType) => {
    const { element, plusModalHandler } = props

    const [likeId, setLikeId] = useState<number[]>([])
    const [colorId, setColorId] = useState<string[]>([])
    console.log(colorId)
    const [colorName, setColorName] = useState<string>('')

    const [sizeId, setSizeId] = useState<string[]>([])
    const [sizeName, setSizeName] = useState<string>('')

    interface IItemCreateType {
        count: number
        size_id: string,
        size_name: string,
        color_id: string[],
        color_name: string,
        optionId: number
    }

    const [itemCreate, setItemCreate] = useState<IItemCreateType[]>([])
    console.log(itemCreate)

    const [sumCount, setSumCount] = useState(0)

    const colorHandler = (checked: boolean, targetColorId: string, name: string, like: number) => {
        if (!checked) {
            setColorId(prv => [...prv, targetColorId])
            setLikeId(prv => [...prv, like])
            setColorName(name)
        }
        if (checked) {
            setColorId(colorId.filter(el => el !== targetColorId))
            setLikeId(likeId.filter(el => el !== like))
            setColorName('')
        }
    }


    const sizeHandler = (checked: boolean, targetSizeId: string, name: string, optionId: number) => {
        if (!checked) {
            console.log('2', sizeId)
            setSizeId(prv => [...prv, targetSizeId])
            setSizeName(name)
            const itemCreateData = {
                size_id: targetSizeId,
                size_name: name,
                color_id: colorId,
                color_name: colorName,
                count: 1,
                optionId
            }
            if (itemCreate.filter(el => el.size_id === targetSizeId && el.color_id === colorId).length === 0) {
                setItemCreate((prv) => [...prv, itemCreateData])
                setSumCount(prv => prv + 1)
            } else {
                for (let i = 0; i < itemCreate.length; i++) {
                    if (itemCreate[i].size_id === targetSizeId && itemCreate[i].color_id === colorId) {
                        itemCreate[i].count++
                    }
                }
                setSumCount(prv => prv + 1)
            }
        }
        if (checked) {
            setSizeId(sizeId.filter(el => el !== targetSizeId))
            setSizeName('')
        }
    }

    const itemDeleteHandler = (optionId: number) => {
        setItemCreate(itemCreate.filter(el => el.optionId !== optionId))
        for (let i = 0; i < itemCreate.length; i++) {
            if (itemCreate[i].optionId === optionId)
                setSumCount(prv => prv - itemCreate[i].count)
        }
    }

    const sumCountHandler = (counter: number, optionId: number) => {
        for (let i = 0; i < itemCreate.length; i++) {
            if (itemCreate[i].optionId === optionId) {
                itemCreate[i].count++
                setSumCount(prv => prv + 1)
            }
        }
    }

    const minusCountHandler = (counter: number, optionId: number) => {

        for (let i = 0; i < itemCreate.length; i++) {
            if (itemCreate[i].optionId === optionId) {
                if (itemCreate[i].count > 1) {
                    itemCreate[i].count--
                    setSumCount(prv => prv - 1)
                }
            }
        }
    }

    // wishlist Item in cart function
    const wishItemInCartHandler = async () => {
        try {
            const cartItem = []
            for (let i = 0; i < itemCreate.length; i++) {
                cartItem.push(
                    {
                        optionId: itemCreate[i].optionId,
                        quantity: itemCreate[i].count
                    }
                )
            }
            await axios.post(`http://${API_IP}:3000/cart`, {
                cartItem
            }, {
                headers: {
                    'authorization': localStorage.getItem('access_token')
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    // wishList Item in order function
    const wishItemInOrderHandler = async () => {
        try {
            const orderItem = []
            for (let i = 0; i < itemCreate.length; i++) {
                orderItem.push(
                    {
                        optionId: itemCreate[i].optionId,
                        quantity: itemCreate[i].count
                    }
                )
            }
            await axios.post(`http://${API_IP}:3000/order`, {
                orderItem
            }, {
                headers: {
                    'authorization': localStorage.getItem('access_token')
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <S.Contain>
            <S.Header>
                <S.HeaderTitle>옵션선택</S.HeaderTitle>
                <S.HeaderX
                    onClick={() => { plusModalHandler(element.id); }}
                >X</S.HeaderX>
            </S.Header>
            <S.ContentContain>
                <S.ContentTitle>{element.name}</S.ContentTitle>
                <S.ContentBox>
                    <S.ContentImg src={element.thumbnail} />
                    <S.ContentInBox>
                        <S.DisplayBox>
                            <S.ContentColorbox>
                                <S.ContentColorInBox>
                                    <S.ColorTitle>Color</S.ColorTitle>
                                    <S.ColorButtonBox>
                                        <S.ColorBoxIn>
                                            {
                                                element.color.map((item) =>
                                                    <Fragment key={item.colorId}>
                                                        <S.ColorLabel
                                                            htmlFor={item.colorId}
                                                            check={colorId}
                                                            colorId={item.colorId}
                                                        >
                                                            ({item.colorId}){item.colorName}
                                                        </S.ColorLabel>
                                                        <S.ColorCheckBox
                                                            id={item.colorId}
                                                            type='checkbox'
                                                            disabled={!colorId.includes(item.colorId) && colorId.length === 1}
                                                            onChange={(e) => { colorHandler(e.currentTarget.checked, item.colorId, item.colorName, element.id); }}
                                                            checked={!colorId.includes(item.colorId)}
                                                        />
                                                    </Fragment>
                                                )
                                            }
                                        </S.ColorBoxIn>
                                        <S.ColorText>{colorId.length === 1 ? `[필수]${colorName}` : `[필수]옵션을 선택해 주세요`}</S.ColorText>
                                    </S.ColorButtonBox>
                                </S.ContentColorInBox>
                            </S.ContentColorbox>
                            <S.ContentSizeBox>
                                <S.ContentSizeInBox>
                                    <S.SizeTitle>Size</S.SizeTitle>
                                    <S.SizeButtonBox>
                                        <S.ColorBoxIn>
                                            {element.color.map(item => colorId.includes(item.colorId) && item.options?.map((el) =>
                                                <Fragment key={el.sizeId}>
                                                    <S.SizeLabel
                                                        htmlFor={el.sizeId}
                                                        check={sizeId}
                                                        sizeId={el.sizeId}
                                                    >
                                                        ({el.sizeId}){el.size}
                                                    </S.SizeLabel>
                                                    <S.SizeCheck
                                                        id={el.sizeId}
                                                        type='checkbox'
                                                        disabled={!sizeId.includes(el.sizeId) && sizeId.length === 1}
                                                        onChange={(e) => { sizeHandler(e.target.checked, el.sizeId, el.size, el.optionId); }}
                                                    />
                                                </Fragment>
                                            )
                                            )
                                            }
                                            {
                                                colorId.length === 0
                                                &&
                                                <S.defaultLabelBox>
                                                    <S.SizeDefaultLabel htmlFor='default'>
                                                        [size]option
                                                    </S.SizeDefaultLabel>
                                                    <S.SizeDefaultInput id='default' />
                                                    <S.SizeDefaultLabel htmlFor='default'>
                                                        [size]option
                                                    </S.SizeDefaultLabel>
                                                    <S.SizeDefaultInput id='default' />
                                                    <S.SizeDefaultLabel htmlFor='default'>
                                                        [size]option
                                                    </S.SizeDefaultLabel>
                                                    <S.SizeDefaultInput id='default' />
                                                </S.defaultLabelBox>

                                            }
                                        </S.ColorBoxIn>
                                        <S.SizeText>{sizeId.length === 1 ? `[필수]${sizeName}` : `[필수]옵션을 선택해 주세요`}</S.SizeText>
                                    </S.SizeButtonBox>
                                </S.ContentSizeInBox>
                            </S.ContentSizeBox>
                        </S.DisplayBox>
                    </S.ContentInBox>
                </S.ContentBox>
            </S.ContentContain>
            <S.ItemCreateSpan> 위 옵션선택 박스를 선택하시면 아래에 상품이 추가됩니다.</S.ItemCreateSpan>
            <S.ItemCreateContain>
                {
                    itemCreate.map((el, index) =>
                        <S.ItemCreateBox key={index}>
                            <S.ItemInfoBox>
                                <S.ItemInfoTitle>{element.name}</S.ItemInfoTitle>
                                <S.ItemInfo>-{el.color_name}/{el.size_name}</S.ItemInfo>
                            </S.ItemInfoBox>
                            <S.ItemCountBox>
                                <button
                                    onClick={() => { sumCountHandler(el.count, el.optionId); }}
                                >
                                    +
                                </button>
                                <S.ItemCountInput
                                    type='number'
                                    value={el.count}
                                    min='1'
                                    readOnly
                                />
                                <button
                                    onClick={() => { minusCountHandler(el.count, el.optionId); }}
                                >
                                    -
                                </button>
                                <S.ItemDeleteButton onClick={() => { itemDeleteHandler(el.optionId); }}>x</S.ItemDeleteButton>
                            </S.ItemCountBox>
                            <S.ItemPrice>
                                {element.price}
                            </S.ItemPrice>
                        </S.ItemCreateBox>
                    )
                }
            </S.ItemCreateContain>
            <S.TotalPriceBox>
                <S.CountBox>총 상품금액(수량): <S.Count>&nbsp;{sumCount * element.price}&nbsp;</S.Count>({sumCount}개)</S.CountBox>
            </S.TotalPriceBox>
            <S.ButtonBox>
                <S.ConfirmOrderButton
                    onClick={wishItemInOrderHandler}
                >
                    바로 구매하기
                </S.ConfirmOrderButton>
                <S.ConfirmCartButton
                    onClick={wishItemInCartHandler}
                >
                    장바구니 담기
                </S.ConfirmCartButton>
            </S.ButtonBox>
        </S.Contain >
    )
}

export default PlusOptionModal