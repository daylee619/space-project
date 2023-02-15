import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_IP } from '../../../../common/utils/ApiIp'
import * as S from './MypageUserInfo.style'

interface IUserInfoDataType {
    name: string
    email: string
    phone: string
    thumbnail: string
    points: string
}

interface IMypageUserInfoPropsType {
    message: string
}

const MypageUserInfo = (props: IMypageUserInfoPropsType) => {
    const [userInfoData, setuserInfoData] = useState<IUserInfoDataType>()

    const userInfoDataHandler = async () => {
        try {
            await axios.get(`http://${API_IP}:3000/user/mypage`, {
                headers: {
                    "authorization": localStorage.getItem('access_token')
                }
            })
                .then(res => {
                    const { data } = res
                    setuserInfoData(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        userInfoDataHandler()
    }, [props.message])

    return (
        <S.Contain>
            <S.Thumbnail src={userInfoData?.thumbnail} alt={'user_thumbnail'} />
            <S.UserInfoBox>
                <S.Name>이름 : {userInfoData?.name}</S.Name>
                <S.Email>이메일 : {userInfoData?.email}</S.Email>
                <S.Phone>전화번호 : {userInfoData?.phone}</S.Phone>
                <S.Points>내 포인트 : {Number(userInfoData?.points)}</S.Points>
            </S.UserInfoBox>
        </S.Contain>
    )
}

export default MypageUserInfo