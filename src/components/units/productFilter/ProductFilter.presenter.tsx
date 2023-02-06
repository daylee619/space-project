import * as S from "./ProductFilter.styles"
import { IProductFilterProps } from "./ProductFilter.types"

export default function ProductFilterUI(props: IProductFilterProps) {
  return (
    <>
      <S.FilterWrapper>
        <S.Filter>FILTER</S.Filter>
        <S.ColorWrapper>
          <S.ColorTitle
            onClick={() => {
              props.setColorView((prev) => !prev)
            }}
          >
            색상
            <S.TitleImg
              cssClick={props.colorView}
              src="https://spao.com/morenvyimg/icon_filter_arrow.png"
            />
          </S.ColorTitle>
          <S.Color>
            {props.colorView &&
              props.data.color?.map((el: any) => (
                <S.ColorButtonWrapper
                  cssColor={el.name}
                  key={el.id}
                  isChecked={true}
                >
                  <button
                    value={el.id}
                    onClick={props.colorSelecteHandler}
                  ></button>
                </S.ColorButtonWrapper>
              ))}
          </S.Color>
        </S.ColorWrapper>

        <S.ItemWrapper>
          <S.ItemTitle
            onClick={() => {
              props.setItemView((prev) => !prev)
            }}
          >
            아이템
            <S.TitleImg
              cssClick={props.itemView}
              src="https://spao.com/morenvyimg/icon_filter_arrow.png"
            />
          </S.ItemTitle>
          <S.Item>
            {props.itemView &&
              props.data.item?.map((el: any) => (
                <S.ItemButtonWrapper key={el.id}>
                  <button
                    onClick={props.itemSelecteHandler}
                    value={el.id}
                  >
                    {el.name}
                  </button>
                </S.ItemButtonWrapper>
              ))}
          </S.Item>
        </S.ItemWrapper>
        <S.SearchWrapper>
          <S.SearchTitle onClick={props.onClickSearchButton}>
            결과 내 검색
            <S.TitleImg
              cssClick={props.searchView}
              src="https://spao.com/morenvyimg/icon_filter_arrow.png"
            />
          </S.SearchTitle>
          <div>
            {props.searchView && (
              <S.SearchBox>
                <S.SearchInput
                  type="text"
                  onChange={props.onChangeTextInput}
                />
                <S.SearchButton
                  src="https://img.echosting.cafe24.com/skin/base/product/btn_research.gif"
                  onClick={props.onClickSubmit}
                />
              </S.SearchBox>
            )}
          </div>
        </S.SearchWrapper>
        {props.data.gender && (
          <S.GenderWrapper>
            <S.GenderTitle
              onClick={() => {
                props.setgenderView((prev) => !prev)
              }}
            >
              성별
              <S.TitleImg
                cssClick={props.colorView}
                src="https://spao.com/morenvyimg/icon_filter_arrow.png"
              />
            </S.GenderTitle>
            <S.Gender>
              {props.genderView &&
                props.data.gender?.map((el: any) => (
                  <S.GenderButtonWrapper key={el.id}>
                    <button
                      onClick={props.categorySelecteHandler}
                      value={el.id}
                    >
                      {el.name}
                    </button>
                  </S.GenderButtonWrapper>
                ))}
            </S.Gender>
          </S.GenderWrapper>
        )}
      </S.FilterWrapper>
    </>
  )
}
