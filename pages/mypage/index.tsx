import { useState } from 'react'
import MypageCategory from '../../src/components/units/mypage/mypageCategory/MypageCategory'
import MypageMain from '../../src/components/units/mypage/mypageMain/MypageMain'
import MypageUserInfo from '../../src/components/units/mypage/mypage_user_info/MypageUserInfo'
import { Contain } from '../../styles/MypageDiv.style'

const Mypage = () => {
    const [message, setMessage] = useState<string>('')

    return (
        <>
            <MypageUserInfo
                message={message}
            />
            <Contain>
                <MypageCategory />
                <MypageMain
                    setMessage={setMessage}
                />
            </Contain>
        </>
    )
}

export default Mypage