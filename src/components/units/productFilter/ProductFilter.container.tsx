import ProductFilterUI from "./ProductFilter.presenter"
import { ChangeEvent, useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"

// 리팩토링 다시

export default function ProductFilter() {
  const router = useRouter()

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


  const URL = router.query.url_query
  const URL_HANDLER = URL?.split('&') ?? []
  const MAIN_CATEGORY = URL_HANDLER[0]?.split('=') ?? ''
  const COLOR = URL_HANDLER[1]?.split('=') ?? ''
  const ITEM = URL_HANDLER[2]?.split('=') ?? ''
  const SORT = URL_HANDLER[3]?.split('=') ?? ''


  // 색깔 버튼 선택
  const colorSelecteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!colorSelect.includes(e.target.value)) {
      const ddd = colorSelect.concat(e.target.value)
      setColorSelect(ddd)
      router.push(`/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${ddd}&item=${ITEM[1]}&sort=${SORT[1]}`)
    }

    if (colorSelect.includes(e.target.value)) {
      const aaa = colorSelect
      const bbb = aaa.filter(el => e.target.value !== el)
      setColorSelect(bbb)
      router.push(`/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${bbb}&item=${ITEM[1]}&sort=${SORT[1]}`)
    }
  }
  // 아이템 버튼 선택
  const itemSelecteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!itemSelect.includes(e.target.value)) {
      const eee = itemSelect.concat(e.target.value)
      setItemSelect(eee)
      router.push(`/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${COLOR[1]}&item=${eee}&sort=${SORT[1]}`)
    }
    if (itemSelect.includes(e.target.value)) {
      const fff = itemSelect.filter(el => e.target.value !== el)
      setItemSelect(fff)
      router.push(`/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${COLOR[1]}&item=${fff}&sort=${SORT[1]}`)
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
  // onClick={() => router.push(`/productlist/${router.query.categoryId}/${}`)}
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
