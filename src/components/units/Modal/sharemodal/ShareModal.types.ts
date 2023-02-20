import { Dispatch, SetStateAction } from "react"

export interface IShareModalProps {
  isModal: boolean
  close: React.MouseEventHandler<HTMLButtonElement>
  setIsModal: Dispatch<SetStateAction<boolean>>
  open: () => void
}
