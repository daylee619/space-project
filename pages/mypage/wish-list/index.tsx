import MypageCategory from '../../../src/components/units/mypage/mypageCategory/MypageCategory'
import WishList from '../../../src/components/units/mypage/mypageWishList/WishList'
import { Contain } from '../../../styles/MypageDiv.style'

const WishListPage = () => {
    return (
        <Contain>
            <MypageCategory />
            <WishList />
        </Contain>
    )
}

export default WishListPage