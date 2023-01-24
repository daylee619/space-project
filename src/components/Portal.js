import reactDom from "react-dom"

const ModalPortal = ({ children }) => {
  if (typeof window !== "undefined") {
    const lookbookel = document.getElementById("lookbookportal")
    const reviewel = document.getElementById("reviewportal")
    return reactDom.createPortal(children, lookbookel, reviewel)
  }
}

export default ModalPortal
