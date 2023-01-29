import { useState } from 'react'
import * as S from './PlusOptionModal.style'

const PlusOptionModal = () => {

    const [checkedState, setCheckedState] = useState(false)

    const checkHandler = (checked: boolean) => {
        setCheckedState(checked)
    }

    return (
        <S.Contain>
            <S.Header>
                <S.HeaderTitle>옵션선택</S.HeaderTitle>
                <S.HeaderX>X</S.HeaderX>
            </S.Header>
            <S.ContentContain>
                <S.ContentTitle>원턱 와이드 스트레이트 팬츠_SPMTD12C02</S.ContentTitle>
                <S.ContentBox>
                    <S.ContentImg src='fds' />
                    <S.ContentInBox>
                        <S.DisplayBox>
                            <S.ContentColorbox>
                                <S.ColorTitle>Color</S.ColorTitle>
                                <S.ColorButtonBox>
                                    { // map 으로 찍어내야하는 버튼
                                        <>
                                            <S.ColorLabel
                                                htmlFor='1'
                                                check={checkedState}
                                            >
                                                노란색
                                            </S.ColorLabel>
                                            <S.ColorCheckBox
                                                id='1'
                                                type='checkbox'
                                                onChange={(e) => { checkHandler(e.target.checked); }}
                                            />
                                        </>
                                    }
                                    <S.ColorText>[필수]옵션을 선택해 주세요</S.ColorText>
                                </S.ColorButtonBox>
                            </S.ContentColorbox>
                            <S.ContentSizeBox>
                                <S.SizeTitle>Size</S.SizeTitle>
                                <S.SizeButtonBox>
                                    {  // map 으로 찍어내야하는 버튼
                                        <>
                                            <label></label>
                                            <S.SizeButton type='checkbox' />
                                        </>
                                    }
                                    <S.SizeText>[필수]옵션을 선택해 주세요</S.SizeText>
                                </S.SizeButtonBox>
                            </S.ContentSizeBox>
                        </S.DisplayBox>
                    </S.ContentInBox>
                </S.ContentBox>
            </S.ContentContain>
            <span>위 옵션선택 박스를 선택하시면 아래에 상품이 추가됩니다.</span>
            {/* 아래 부분은 새로운 배열에 위의 버튼을 누를때마다 push 로 추가가되고 그 추가된 부분을 아래에 표현 */}
            {
                <div>
                    <div>
                        <span>원턱 와이드 스트레이트 팬츠_SPMTD12C02</span>
                        <span>-(19)BLACK/M(080)</span>
                    </div>
                    <div>
                        <input type='number' />
                        <button>x</button>
                    </div>
                    <div>
                        39900
                    </div>
                </div>
            }
            <div>
                <div>총 상품금액(수량): 0(0개)</div>
            </div>
            <div>
                <button>바로 구매하기</button>
                <button>장바구니 담기</button>
            </div>
        </S.Contain>
    )
}

export default PlusOptionModal