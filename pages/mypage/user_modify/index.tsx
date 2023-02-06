import MypageCategory from '../../../src/components/units/mypage/mypageCategory/MypageCategory'
import MypageUserModify from '../../../src/components/units/mypage/mypage_user_modify/MypageUserModify'
import { Contain } from '../../../styles/MypageDiv.style'


const UserModify = () => {
    return (
        <Contain>
            <MypageCategory />
            <MypageUserModify />
        </Contain>
    )
}

export default UserModify