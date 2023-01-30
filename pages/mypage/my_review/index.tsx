import MypageCategory from '../../../src/components/units/mypage/mypageCategory/MypageCategory'
import MypageReview from '../../../src/components/units/mypage/mypageReivew/MypageReview'
import { Contain } from '../../../styles/MypageDiv.style'

const MyReview = () => {
    return (
        <Contain>
            <MypageCategory />
            <MypageReview />
        </Contain>
    )
}

export default MyReview