import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import * as S from './OrderContain.style'

interface IOrderContentPorpsType {
    title: string
    children: React.ReactChild
}

const OrderContent = (props: IOrderContentPorpsType) => {
    const [modalState, setModalState] = useState(true)

    const modalHandler = () => {
        setModalState(prev => !prev)
    }

    return (
        <S.Contain>
            <S.TitleBox>
                <S.Title>{props.title}</S.Title>
                <S.ArrowIcon onClick={modalHandler} textHandle={modalState}><DownOutlined /></S.ArrowIcon>
            </S.TitleBox>
            {modalState &&
                <S.ChildrenBox>
                    {props.children}
                </S.ChildrenBox>
            }
        </S.Contain>
    )
}

export default OrderContent