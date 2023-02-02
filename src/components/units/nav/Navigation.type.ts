export interface INavigationData {
  id: number
  name: string
  subCategories: ISubCategories[] | null
  namingCategoies: INamingCategories[] | null
  productInfo: IProductInfoType[] | null[]
}

interface IProductInfoType {
  price: number
  productId: number
  thumbnail: string
  productName: string
}

interface ISubCategories {
  id: string
  name: string
}

interface INamingCategories {
  namingId: number
  namingName: string
}

export interface INavSubCategoryPropsType {
  subCategoryData: INavigationData
  pointerLeaveHandelr: () => void
}
