import * as S from './cartmodal.styles'
import { CloseOutlined } from '@ant-design/icons';
export default function CartModal() {




    return (
        <S.ModalWrapper >
            <S.ModalTop>
                <div>장바구니 담기</div>
                <div><CloseOutlined /></div>
            </S.ModalTop>
            <S.ModalMiddle >
                <div><img src='https://spao.com/morenvyimg/top_logo_pc.png' /></div>
                <div>장바구니에 상품이 정상적으로 담겼습니다.</div>
            </S.ModalMiddle>
            <div>
                <button>장바구니 이동</button>
                <button>쇼핑계속하기</button>
            </div>
        </S.ModalWrapper>)
}