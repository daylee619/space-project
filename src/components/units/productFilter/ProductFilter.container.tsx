import ProductFilterUI from "./ProductFilter.presenter"
import { ChangeEvent, useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import { API_IP } from "../../../common/utils/ApiIp"
import { IFilterData } from "./ProductFilter.types"
export default function ProductFilter() {
  const router = useRouter()

  const [data, setData] = useState<IFilterData>()
  const [colorView, setColorView] = useState<boolean>(true)
  const [itemView, setItemView] = useState<boolean>(true)
  const [searchView, setSearchView] = useState<boolean>(true)
  const [genderView, setgenderView] = useState<boolean>(true)

  const [colorSelect, setColorSelect] = useState<number[]>([])
  const [itemSelect, setItemSelect] = useState<number[]>([])
  const [categorySelect, setCategorySelect] = useState<number[]>([])

  const [text, setText] = useState("")

  const getData = async () => {
    try {
      await axios.get(`http://${API_IP}:3000/product/filter`).then((res) => {
        setData(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

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

  const onClickSearchButton = () => {
    setSearchView((prev) => !prev)
  }

  const URL = router.query.url_query?.toString()
  const URL_HANDLER = URL?.split("&") ?? []
  const MAIN_CATEGORY = URL_HANDLER[0]?.split("=") ?? ""
  const COLOR = URL_HANDLER[1]?.split("=") ?? ""
  const ITEM = URL_HANDLER[2]?.split("=") ?? ""
  const SORT = URL_HANDLER[3]?.split("=") ?? ""
  const SUB = URL_HANDLER[4]?.split("=") ?? ""
  const SEARCH = URL_HANDLER[5]?.split("=") ?? ""

  // 색깔 버튼 선택
  const colorSelecteHandler = (colorId: number) => {
    if (!colorSelect.includes(colorId)) {
      const ddd = colorSelect.concat(colorId)
      setColorSelect(ddd)
      router.push(
        `/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${ddd}&item=${ITEM[1]}&sort=${SORT[1]}&subCategory=${SUB[1]}&name=${SEARCH[1]}`
      )
    }

    if (colorSelect.includes(colorId)) {
      const aaa = colorSelect
      const bbb = aaa.filter((el) => colorId !== el)
      setColorSelect(bbb)
      router.push(
        `/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${bbb}&item=${ITEM[1]}&sort=${SORT[1]}&subCategory=${SUB[1]}&name=${SEARCH[1]}`
      )
    }
  }
  // 아이템 버튼 선택
  const itemSelecteHandler = (itemId: number) => {
    if (!itemSelect.includes(itemId)) {
      const eee = itemSelect.concat(itemId)
      setItemSelect(eee)
      router.push(
        `/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${COLOR[1]}&item=${eee}&sort=${SORT[1]}&subCategory=${SUB[1]}&name=${SEARCH[1]}`
      )
    }
    if (itemSelect.includes(itemId)) {
      const fff = itemSelect.filter((el) => itemId !== el)
      setItemSelect(fff)
      router.push(
        `/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${COLOR[1]}&item=${fff}&sort=${SORT[1]}&subCategory=${SUB[1]}&name=${SEARCH[1]}`
      )
    }
  }

  // 버튼 선택
  const categorySelecteHandler = (genderId: number) => {
    if (!categorySelect.includes(genderId)) {
      setCategorySelect(categorySelect.concat(genderId))
    }
    if (categorySelect.includes(genderId)) {
      setCategorySelect(categorySelect.filter((el) => genderId !== el))
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

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <ProductFilterUI
        data={data}
        colorView={colorView}
        setColorView={setColorView}
        setgenderView={setgenderView}
        itemView={itemView}
        setItemView={setItemView}
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
