import axios from 'axios'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import NavigationSearch from './navigation-search/NavigationSearch'
import NavSubCategory from './navigation-sub-category/NavSubCategory'
import * as S from "./Navigation.style"
import { INavigationData } from './Navigation.type'


const Navigation = () => {
    const [navigationData, setNavigationData] = useState<INavigationData[]>([])
    const [categoryState, setCategoryState] = useState<number>()
    const [userPointerState, setUserPointerState] = useState<boolean>(false)
    const [serachModal, setSearchModal] = useState<boolean>(false)
    const router = useRouter()


    // const token = localStorage.getItem('access_token')

    const navigationDataHandler = async () => {
        try {
            await axios.get('/data/navigation.json')
                .then(res => {
                    const { data } = res
                    setNavigationData(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    const pointerHandler = (id: number) => {
        setCategoryState(id)
    }

    const pointerLeaveHandelr = () => {
        setCategoryState(0)
    }

    const userPointerHandler = () => {
        setUserPointerState(prv => !prv)
    }

    // mypage 이동
    const mypageMoveHandler = async () => {
        await router.push('/sign-in')
    }

    // search modal handler 
    const searchModalHandler = () => {
        setSearchModal(prv => !prv)
    }

    useEffect(() => {
        navigationDataHandler()
    }, [])

    return (
        <>

            <S.Contain>
                <S.InContain>
                    <S.ImgBox>
                        <S.LogoImg
                            src='https://www.spao.com/morenvyimg/top_logo_pc.png'
                            alt='https://www.spao.com/morenvyimg/top_logo_pc.png'
                            onClick={async () => await router.push('/')}
                        />
                    </S.ImgBox>
                    <S.NavContain>
                        {navigationData.map(el =>
                            <Fragment key={el.id}>
                                <S.NavCategory
                                    onPointerEnter={() => { pointerHandler(el.id); }}
                                    onClick={async () => await router.push(`/${el.name}`)}
                                >
                                    {el.name}
                                </S.NavCategory>
                                {
                                    categoryState === el.id
                                    &&
                                    el.namingCategoies !== null
                                    &&
                                    <>
                                        <NavSubCategory
                                            subCategoryData={el}
                                            pointerLeaveHandelr={pointerLeaveHandelr}
                                        />
                                    </>
                                }
                            </Fragment>
                        )}
                    </S.NavContain>
                    <S.UserSignIconContain
                    >
                        <S.UserOutLinedBox
                            onClick={mypageMoveHandler}
                        >
                            <S.UserOutLined
                                onPointerEnter={userPointerHandler}
                            />
                            {
                                userPointerState
                                &&
                                (

                                    <S.UserInfoNav
                                    >
                                        <S.UserInfoNavSpanBox
                                            onPointerLeave={userPointerHandler}
                                        >
                                            <S.UserInfoNavSpan
                                                onClick={async () => await router.push('/sign-in')}
                                            >
                                                LOGIN
                                            </S.UserInfoNavSpan>
                                            <S.UserInfoNavSpanLast
                                                onClick={async () => await router.push('/sign-in')}
                                            >
                                                ORDER</S.UserInfoNavSpanLast>
                                        </S.UserInfoNavSpanBox>
                                    </S.UserInfoNav>

                                    // <S.UserInfoNav>
                                    //     <S.UserInfoNavSpanBox>
                                    //         <S.UserInfoNavSpan>LOGOUT</S.UserInfoNavSpan>
                                    //         <S.UserInfoNavSpan>MYPAGE</S.UserInfoNavSpan>
                                    //         <S.UserInfoNavSpanLast>ORDER</S.UserInfoNavSpanLast>
                                    //     </S.UserInfoNavSpanBox>
                                    // </S.UserInfoNav>
                                )
                            }
                        </S.UserOutLinedBox>
                        <S.SearchOutLinedBox>
                            <S.SearchOutLined
                                onClick={searchModalHandler}
                            />
                            {
                                serachModal
                                &&
                                <NavigationSearch
                                    searchModalHandler={searchModalHandler}
                                />
                            }
                        </S.SearchOutLinedBox>
                        <S.HeartOutLinedBox>
                            <S.HeartOutLined
                                onClick={async () => await router.push('/mypage/wish-list')}
                            />
                        </S.HeartOutLinedBox>
                        <S.ShoppingCartOutLinedBox>
                            <S.ShoppingCartOutLined
                                onClick={async () => await router.push('/cart')}
                            />
                        </S.ShoppingCartOutLinedBox>
                    </S.UserSignIconContain>
                </S.InContain>
            </S.Contain >
        </>
    )
}

export default Navigation