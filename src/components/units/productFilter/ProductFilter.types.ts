import { ChangeEvent, Dispatch, SetStateAction } from "react"

export interface IProductFilterProps {
  data?: any
  genderView: boolean
  searchView: boolean
  itemView: boolean
  colorView: boolean
  setColorView: Dispatch<SetStateAction<boolean>>
  setItemView: Dispatch<SetStateAction<boolean>>
  setgenderView: Dispatch<SetStateAction<boolean>>
  onClickSearchButton: (e: React.MouseEvent<HTMLDivElement>) => void
  itemSelecteHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
  categorySelecteHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
  colorSelecteHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
  onChangeTextInput: (e: ChangeEvent<HTMLInputElement>) => void
  onClickSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
}
