import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import { INavigationSearchPropsType } from '../Navigation.type'
import * as S from './NavigationSearch.style'

const NavigationSearch = (props: INavigationSearchPropsType) => {
    const { searchModalHandler } = props
    const [searchInput, setSearchInput] = useState('')

    const searchHandler = (key: string) => {
        if (key === 'Enter') {
            search()
        }
    }

    const search = async () => {
        try {
            console.log('ee')
            await axios.post('api', {
                value: searchInput
            })
        } catch (error) {
            console.log(error)
        }
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
                            <S.SearchSign />
                        </S.SearchConfirmBox>
                    </S.SearchConfirmContain>
                </S.SearchBox>
                <S.Cloese
                    onClick={searchModalHandler}
                >
                    x
                </S.Cloese>
            </S.InContain>
        </S.Contain>
    )
}

export default NavigationSearch