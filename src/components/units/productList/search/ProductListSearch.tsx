import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import * as S from './ProductListSearch.style'

const ProductListSearch = () => {
    const [searchInput, setSearchInput] = useState('')

    const router = useRouter()

    const searchHandler = (key: string) => {
        if (key === 'Enter') {
            search()
        }
    }

    const search = () => {
        router.push(`/productlist/mainCategory=&color=&item=&sort=&subCategory=&name=${searchInput}`)
    }

    const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }

    return (
        <S.Contain>
            <S.InContain>
                <S.SearchBox>
                    <S.TitleBox>
                        <S.Title>고객님</S.Title>
                        <S.Title>무엇을 찾으시나요?</S.Title>
                    </S.TitleBox>
                    <S.SearchConfirmContain>
                        <S.SearchConfirmBox>
                            <S.Search
                                type='text'
                                onChange={searchInputHandler}
                                onKeyPress={(e) => { searchHandler(e.key); }}
                            />
                            <S.SearchSign
                                onClick={search}
                            />
                        </S.SearchConfirmBox>
                    </S.SearchConfirmContain>
                </S.SearchBox>
            </S.InContain>
        </S.Contain>
    )
}

export default ProductListSearch