import axios from "axios"
import { useEffect, useState } from "react"
import ProductItem from "../../../common/libraries/productItem/ProductItem"

export default function ProductList() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("./data/productlist.json").then((res) => {
      setData(res.data)
    })
  }, [])

  const temp = [
    "(39) Ivory / SIZE : S(085)",
    "(39) Ivory / SIZE : M(090)",
    "(39) Ivory / SIZE : L(095)",
  ]

  // const a = data.map((el) => el.id)
  // console.log(a)
  //   console.log(data)

  return (
    <>
      <div>Women</div>

      {data.map((el) => (
        <div
          key={el.id}
          style={{ margin: "10px" }}
        >
          <ProductItem
            imgWidth="320px"
            imgHeight="400px"
            menuWidth="200px"
            imgUrl={el.thumbnail}
            data={temp}
          />
        </div>
      ))}
    </>
  )
}
