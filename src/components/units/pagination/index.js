import { useState } from "react"

const PaginationPage = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [totalCount, setTotalCount] = useState(74)
  const handlePageChange = (page) => {
    setPage(page)
  }

  return <></>
}

export default PaginationPage
