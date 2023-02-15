import ProductList from "../../../src/components/units/productList"
import ProductListRecommend from "../../../src/components/units/productListBottomRecommend"
import ProductFilter from '../../../src/components/units/productFilter/ProductFilter.container'
import ProductListSearch from '../../../src/components/units/productList/search/ProductListSearch'
import { useRouter } from 'next/router'

export default function ProductListPage() {
  const router = useRouter()
  const URL = router.query.url_query
  const URL_HANDLER = URL?.split('&') ?? []
  const SEARCH = URL_HANDLER[5]?.split('=') ?? ''


  return (
    <div>
      {
        SEARCH[1] !== ''
        &&
        <ProductListSearch />
      }
      <div style={{ display: 'flex' }}>
        <ProductFilter />
        <ProductList />
      </div>
      <ProductListRecommend />
    </div>
  )
}
