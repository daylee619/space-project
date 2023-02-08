import styled from "@emotion/styled"
import { RedoOutlined } from "@ant-design/icons"
import { Rate } from "antd"
import { useState } from "react"
import axios from "axios"

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

  const b = props.data.scoreCount?.map((el) => el.star)
  // console.log(b)

  const onClickStar = (e) => {
    starCheck.includes(e.target.value)
  }

  const initFilter = () => {
    setStarCheck([])
  }

  const postHandler = async () => {
    try {
      await axios
        .post("api", {
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
      <StarOptionContaineriner>
        {/* <StarOptionBtn>
          <StarOptionClick >
            별점
            <DownOutlined style={{ fontSize: "10px", marginLeft: "10px" }} />
          </StarOptionClick>
        </StarOptionBtn> */}
        <StarContainer>
          <div>
            <StarOptionList>
              <StarResetWrapper>
                <div>별점</div>
                <ResetWrapper onClick={initFilter}>
                  <div>초기화 </div>
                  <RedoOutlined style={{ marginLeft: "3px" }} />
                </ResetWrapper>
              </StarResetWrapper>
              <StarList>
                <StarLabelBox>
                  <label htmlFor="star_five">
                    <Rate
                      defaultValue={5}
                      disabled
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                </StarLabelBox>

                <input
                  type="checkbox"
                  style={{ cursor: "pointer" }}
                  id={5}
                  value={5}
                  onChange={(e) =>
                    onChangeStar(e.target.checked, e.target.value)
                  }
                  checked={!!starCheck.includes("5")}
                />
              </StarList>
              <StarList>
                <StarLabelBox>
                  <label htmlFor="star_four">
                    <Rate
                      defaultValue={4}
                      disabled
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                </StarLabelBox>

                <input
                  type="checkbox"
                  style={{ cursor: "pointer" }}
                  id="star_four"
                  value={4}
                  onChange={(e) =>
                    onChangeStar(e.target.checked, e.target.value)
                  }
                  checked={!!starCheck.includes("4")}
                />
              </StarList>
              <StarList>
                <StarLabelBox>
                  <label htmlFor="star_three">
                    <Rate
                      defaultValue={3}
                      disabled
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                </StarLabelBox>

                <input
                  type="checkbox"
                  style={{ cursor: "pointer" }}
                  id="star_three"
                  value={3}
                  onChange={(e) =>
                    onChangeStar(e.target.checked, e.target.value)
                  }
                  checked={!!starCheck.includes("3")}
                />
              </StarList>
              <StarList>
                <StarLabelBox>
                  <label htmlFor="star_two">
                    <Rate
                      defaultValue={2}
                      disabled
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                </StarLabelBox>

                <input
                  type="checkbox"
                  style={{ cursor: "pointer" }}
                  id="star_two"
                  value={2}
                  onChange={(e) =>
                    onChangeStar(e.target.checked, e.target.value)
                  }
                  checked={!!starCheck.includes("2")}
                />
              </StarList>
              <StarList>
                <StarLabelBox>
                  <label htmlFor="star_one">
                    <Rate
                      defaultValue={1}
                      disabled
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                </StarLabelBox>

                <input
                  type="checkbox"
                  style={{ cursor: "pointer" }}
                  id="star_one"
                  value={1}
                  onChange={(e) =>
                    onChangeStar(e.target.checked, e.target.value)
                  }
                  checked={!!starCheck.includes("1")}
                />
              </StarList>
            </StarOptionList>
            <BtnWrapper onClick={postHandler}>
              <OptionSelectBtn>
                <span>완료</span>
              </OptionSelectBtn>
            </BtnWrapper>
          </div>
        </StarContainer>
      </StarOptionContaineriner>
    </>
  )
}

export const StarOptionContainer = styled.div`
  /* position: relative; */
  width: 200px;
  height: 40px;
`
// export const StarOptionBtn = styled.button`
//   border-color: #14161a;
//   border-radius: 4px;
//   border: solid 1px #ebeff5;
//   background-color: #ffffff;
//   cursor: pointer;
//   /* padding: 8px 12px; */
// `

// export const StarOptionClick = styled.div`
//   padding: 8px 12px;
// `
export const StarContainer = styled.div`
  /* width: 320px; */
  height: 350px;
  /* top: 788.336px; */
  top: 748px;
  /* left: 33.4922px; */
  left: 110px;
  position: absolute;
  z-index: 1;
  border-radius: 8px;
  border: 1px solid #ebeff5;
  background-color: #ffffff;
  overflow-y: scroll;
  margin-top: 7px;
`
export const StarOptionList = styled.ul`
  position: relative;
  /* top: 100px; */
  background-color: #ffffff;
  padding: 8px 16px;
`
export const StarOptionContaineriner = styled.div``
export const StarResetWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  color: #14161a;
  padding: 16px 0 12px 0;
  line-height: 20px;
  width: 200px;
`
export const StarList = styled.li`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  background-color: white;
  font-size: 12px;
  padding: 4px 22px 16px 0;
  line-height: 18px;
  border-bottom: 1px solid #ebeff5;
  width: 200px;
`
// export const StarLabel = styled.label`
//   cursor: pointer;
// `
export const StarLabelBox = styled.div`
  cursor: pointer;
`
export const BtnWrapper = styled.div`
  background-color: white;
  margin-top: -3px;
  border-top: 1px solid #ebeff5;
  padding: 16px;
`
export const OptionSelectBtn = styled.button`
  width: 200px;
  cursor: pointer;
  background-color: #14161a;
  color: white;
  border-radius: 4px;
  height: 40px;
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  span {
    line-height: 36px;
    color: white;
    text-align: center;
    font-size: 14px;
  }
`
export const ResetWrapper = styled.div`
  display: flex;
`
