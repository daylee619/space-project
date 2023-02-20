import { Dispatch, SetStateAction } from "react"

export interface IShippingModalProps {
  isShippingModal: boolean
  setIsShippingModal: Dispatch<SetStateAction<boolean>>
  open: () => void
  close: React.MouseEventHandler<HTMLButtonElement>
}
