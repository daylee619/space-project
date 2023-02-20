import { ChangeEvent, Dispatch, SetStateAction } from "react"

export interface IProductFilter {
  data?: IFilterData
  genderView: boolean
  searchView: boolean
  itemView: boolean
  colorView: boolean
  setColorView: Dispatch<SetStateAction<boolean>>
  setItemView: Dispatch<SetStateAction<boolean>>
  setgenderView: Dispatch<SetStateAction<boolean>>
  onClickSearchButton: (e: React.MouseEvent<HTMLDivElement>) => void
  itemSelecteHandler: (itemId: number) => void
  categorySelecteHandler: (genderId: number) => void
  colorSelecteHandler: (colorId: number) => void
  onChangeTextInput: (e: ChangeEvent<HTMLInputElement>) => void
  onClickSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export interface IFilterData {
  color: IColorType[]
  item: IItemType[]
  gender: IGenderType[]
}

interface IColorType {
  id: number
  name: string
}

interface IItemType {
  id: number[]
  name: string
}

interface IGenderType {
  id: number
  name: string
}
