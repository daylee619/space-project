import MypageCategory from '../../src/components/units/mypage/mypageCategory/MypageCategory'
import MypageMain from '../../src/components/units/mypage/mypageMain/MypageMain'
import { Contain } from '../../styles/MypageDiv.style'

const Mypage = () => {
    return (
        <Contain>
            <MypageCategory />
            <MypageMain />
        </Contain>
    )
}

export default Mypage