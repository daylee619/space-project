import MypageCategory from '../../../../../../../../src/components/units/mypage/mypageCategory/MypageCategory'
import MypageOrderSearch from '../../../../../../../../src/components/units/mypage/mypageOrderSearch/MypageOrderSearch'
import { Contain } from '../../../../../../../../styles/MypageDiv.style'


const OrderHistoryPage = () => {
    return (
        <Contain>
            <MypageCategory />
            <MypageOrderSearch />
        </Contain>
    )
}

export default OrderHistoryPage