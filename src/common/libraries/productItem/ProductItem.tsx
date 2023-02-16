import { MenuOutlined } from "@ant-design/icons"
import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { useRouter } from 'next/router'
import { useState } from "react"

interface IProductItemProps {
  imgWidth?: string
  imgHeight?: string
  menuWidth?: string
  imgUrl?: string
  data?: string[] | undefined
  bottom?: string
  productId?: number
}

const ProductItem = (props: IProductItemProps) => {
  // 전달 받는 값
  const { imgWidth, imgHeight, menuWidth, imgUrl, data, bottom, productId } = props

  const router = useRouter()

  const [imgHoverState, setImgHoverState] = useState(false)
  const [menu, setMenu] = useState(false)

  const bolHandler = () => {
    setImgHoverState((prev) => !prev)
  }

  const clickHandler = () => {
    setMenu((prev) => !prev)
  }

  if (!data) {
    return <></>
  }

  if (!data) {
    return <></>
  }

  return (
    <>
      <Box imgHeight={imgHeight}>
        <Img
          imgWidth={imgWidth}
          imgHeight={imgHeight}
          onMouseEnter={bolHandler}
          src={imgUrl}
          alt="img"
        />
        {imgHoverState && (
          <Div
            onMouseLeave={bolHandler}
            imgWidth={imgWidth}
            imgHeight={imgHeight}
            bottom={bottom}
            onClick={async () => await router.push(`/productdetail/${productId}`)}
          >
            <MenuIcon onClick={clickHandler} />
            {menu && (
              <Menu menuWidth={menuWidth}>
                <MenuItemBox>
                  {data.map((el, index) => (
                    <MenuItem key={index}>color : {el}</MenuItem>
                  ))}
                </MenuItemBox>
              </Menu>
            )}
          </Div>
        )}
      </Box>
    </>
  )
}

export default ProductItem

interface ICssProps {
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  imgWidth?: string
  imgHeight?: string
  menuWidth?: string
  bottom?: string
}

const Frame = keyframes`
    0% {
            opacity: 0;
            transform: translate3d(0, 50%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
`

const Box = styled.div`
  position: relative;
  height: ${(props: ICssProps) =>
    props.imgHeight ? props.imgHeight : "700px"};
`

const Img = styled.img`
  /* position: relative; */
  width: ${(props: ICssProps) => (props.imgWidth ? props.imgWidth : "400px")};
  height: ${(props: ICssProps) =>
    props.imgHeight ? props.imgHeight : "700px"};
    object-fit: cover;
`

const Div = styled.div`
  position: relative;
  bottom: ${(props: ICssProps) => (props.bottom ? props.bottom : "700px")};
  width: ${(props: ICssProps) => (props.imgWidth ? props.imgWidth : "400px")};
  height: ${(props: ICssProps) =>
    props.imgHeight ? props.imgHeight : "700px"};
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  &:hover {
    cursor: pointer;
  }
`

const MenuIcon = styled(MenuOutlined)`
  border: 0.5px solid rgba(250, 250, 250, 0.6);
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  margin-right: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  animation: ${Frame} 0.4s;
`

const Menu = styled.div`
  position: relative;
  top: 102px;
  width: ${(props: ICssProps) => (props.menuWidth ? props.menuWidth : "250px")};
  height: 100px;
  background: rgba(255, 255, 255, 0.6);
  overflow: auto;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`

const MenuItemBox = styled.div``

const MenuItem = styled.div`
  margin-top: 8px;
  font-size: 11px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 5px;
`
