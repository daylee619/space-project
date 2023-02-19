import * as S from "./ProductDetailReviewSelect.styles"
import { RedoOutlined } from "@ant-design/icons"
import { Rate } from "antd"
import { useState } from "react"
import axios from "axios"
import { API_IP } from "../../../common/utils/ApiIp"

export default function ReviewStarDropdown(props) {
  const [starCheck, setStarCheck] = useState([])

  const onChangeStar = (checked, value) => {
    if (checked) {
      setStarCheck((prv) => [...prv, value])
    } else {
      setStarCheck(starCheck.filter((el) => el !== value))
    }
  }

  console.log(starCheck)

  const initFilter = () => {
    setStarCheck([])
  }

  const postHandler = async () => {
    try {
      await axios
        .post(`http://${API_IP}:3000`, {
          key: starCheck,
        })
        .then((res) => {
          const { data } = res
          if (data.message === "COMPLETE") {
            console.log(data.message)
          }
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <S.StarOptionContaineriner>
        {/* <StarOptionBtn>
          <StarOptionClick >
            별점
            <DownOutlined style={{ fontSize: "10px", marginLeft: "10px" }} />
          </StarOptionClick>
        </StarOptionBtn> */}
        <S.StarContainer>
          <div>
            <S.StarOptionList>
              <S.StarResetWrapper>
                <div>별점</div>
                <S.ResetWrapper onClick={initFilter}>
                  <div>초기화 </div>
                  <RedoOutlined style={{ marginLeft: "3px" }} />
                </S.ResetWrapper>
              </S.StarResetWrapper>
              <S.StarList>
                <S.StarLabelBox>
                  <label htmlFor="star_five">
                    <Rate
                      defaultValue={5}
                      disabled
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                </S.StarLabelBox>

                <input
                  type="checkbox"
                  style={{ cursor: "pointer" }}
                  id={5}
                  value={5}
                  onChange={(e) => {
                    onChangeStar(e.target.checked, e.target.value)
                  }}
                  checked={!!starCheck.includes("5")}
                />
              </S.StarList>
              <S.StarList>
                <S.StarLabelBox>
                  <label htmlFor="star_four">
                    <Rate
                      defaultValue={4}
                      disabled
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                </S.StarLabelBox>

                <input
                  type="checkbox"
                  style={{ cursor: "pointer" }}
                  id="star_four"
                  value={4}
                  onChange={(e) => {
                    onChangeStar(e.target.checked, e.target.value)
                  }}
                  checked={!!starCheck.includes("4")}
                />
              </S.StarList>
              <S.StarList>
                <S.StarLabelBox>
                  <label htmlFor="star_three">
                    <Rate
                      defaultValue={3}
                      disabled
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                </S.StarLabelBox>

                <input
                  type="checkbox"
                  style={{ cursor: "pointer" }}
                  id="star_three"
                  value={3}
                  onChange={(e) => {
                    onChangeStar(e.target.checked, e.target.value)
                  }}
                  checked={!!starCheck.includes("3")}
                />
              </S.StarList>
              <S.StarList>
                <S.StarLabelBox>
                  <label htmlFor="star_two">
                    <Rate
                      defaultValue={2}
                      disabled
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                </S.StarLabelBox>

                <input
                  type="checkbox"
                  style={{ cursor: "pointer" }}
                  id="star_two"
                  value={2}
                  onChange={(e) => {
                    onChangeStar(e.target.checked, e.target.value)
                  }}
                  checked={!!starCheck.includes("2")}
                />
              </S.StarList>
              <S.StarList>
                <S.StarLabelBox>
                  <label htmlFor="star_one">
                    <Rate
                      defaultValue={1}
                      disabled
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                </S.StarLabelBox>

                <input
                  type="checkbox"
                  style={{ cursor: "pointer" }}
                  id="star_one"
                  value={1}
                  onChange={(e) => {
                    onChangeStar(e.target.checked, e.target.value)
                  }}
                  checked={!!starCheck.includes("1")}
                />
              </S.StarList>
            </S.StarOptionList>
            <S.BtnWrapper onClick={postHandler}>
              <S.OptionSelectBtn>
                <span>완료</span>
              </S.OptionSelectBtn>
            </S.BtnWrapper>
          </div>
        </S.StarContainer>
      </S.StarOptionContaineriner>
    </>
  )
}
