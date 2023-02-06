import axios from "axios"
import { useEffect, useState } from "react"

const ProductDetail = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("./data/re.json").then((res) => {
      setData(res.data)
    })
    console.log(data)
  }, [])
  return (
    <>
      {data.map((el) => {
        ;<div key={el.id}>{el}</div>
      })}
    </>
  )
}

export default ProductDetail
