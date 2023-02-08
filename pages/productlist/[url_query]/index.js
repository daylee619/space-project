import ProductList from "../../../src/components/units/productList"
import ProductListRecommend from "../../../src/components/units/productListBottomRecommend"
import ProductFilter from '../../../src/components/units/productFilter/ProductFilter.container'

export default function ProductListPage() {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <ProductFilter />
        <ProductList />
      </div>
      <ProductListRecommend />
    </div>
  )
}
