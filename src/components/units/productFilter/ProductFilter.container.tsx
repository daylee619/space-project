import ProductFilterUI from "./ProductFilter.presenter"
import { ChangeEvent, useState, useEffect } from "react"
import axios from "axios"

// 리팩토링 다시

export default function ProductFilter() {
  const [data, setData] = useState<number[] | string[]>([])
  const [colorView, setColorView] = useState<boolean>(true)
  const [itemView, setItemView] = useState<boolean>(true)
  const [searchView, setSearchView] = useState<boolean>(true)
  const [genderView, setgenderView] = useState<boolean>(true)

  const [colorSelect, setColorSelect] = useState([])
  const [itemSelect, setItemSelect] = useState([])
  const [categorySelect, setCategorySelect] = useState([])

  const [text, setText] = useState("")

  const getData = async () => {
    try {
      await axios.get("/data/res.json").then((res) => {
        setData(res.data)
      })
    } catch (error) {
      console.log(error)
      //   console.error(error)
    }
  }

  // console.log(colorSelect)
  // console.log(itemSelect)
  // console.log(categorySelect)

  // const getCheckData = async () => {
  //   try {
  //     axios
  //       .get(
  //         `http://172.20.10.7:3000/product/filter?mainCategory=${categorySelect}&item=${itemSelect}&color=${colorSelect}`
  //       )
  //       .then((res) => {
  //         console.log(res)
  //       })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getCheckData()
  // }, [categorySelect, itemSelect, colorSelect])

  useEffect(() => {
    getData()
  }, [])

  const onClickSearchButton = () => {
    setSearchView((prev) => !prev)
  }
  // 색깔 버튼 선택
  const colorSelecteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!colorSelect.includes(e.target.value)) {
      setColorSelect(colorSelect.concat(e.target.value))
    }
    if (colorSelect.includes(e.target.value)) {
      setColorSelect(colorSelect.filter((el) => e.target.value !== el))
    }
  }
  // 아이템 버튼 선택
  const itemSelecteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!itemSelect.includes(e.target.value)) {
      setItemSelect(itemSelect.concat(e.target.value))
    }
    if (itemSelect.includes(e.target.value)) {
      setItemSelect(itemSelect.filter((el) => e.target.value !== el))
    }
  }

  // 버튼 선택
  const categorySelecteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!categorySelect.includes(e.target.value)) {
      setCategorySelect(categorySelect.concat(e.target.value))
    }
    if (categorySelect.includes(e.target.value)) {
      setCategorySelect(categorySelect.filter((el) => e.target.value !== el))
    }
  }

  const onChangeTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    console.log(text)
  }

  const onClickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    setText("")
    console.log(text)
  }

  return (
    <>
      <ProductFilterUI
        data={data}
        colorView={colorView}
        setColorView={setColorView}
        setgenderView={setgenderView}
        itemView={itemView}
        searchView={searchView}
        genderView={genderView}
        onClickSearchButton={onClickSearchButton}
        colorSelecteHandler={colorSelecteHandler}
        itemSelecteHandler={itemSelecteHandler}
        categorySelecteHandler={categorySelecteHandler}
        onChangeTextInput={onChangeTextInput}
        onClickSubmit={onClickSubmit}
      />
    </>
  )
}
