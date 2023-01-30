import axios from 'axios'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { getDate } from '../../../../common/utils/date/Date';
import { IMypageUserModifyDefaultDataType } from '../Mypage.type';
import * as S from './MypageUserModify.style'

const MypageUserModify = () => {
    // type 수정
    // 보여지는 이미지 저장 
    const [imgView, setImgView] = useState<any>(null);
    // type 수정
    const imgRef = useRef<any>(null)
    // 보내는 이미지 파일 저장
    const [postFile, setPostFile] = useState<any>(null)
    // user post data state
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [birthday, setBirthday] = useState('')
    const [nickname, setNickname] = useState('')
    const [gender, setGender] = useState('')

    // data
    const [defaultData, setDefaultData] = useState<IMypageUserModifyDefaultDataType>()

    const defaultDataHandler = async () => {
        try {
            await axios.get('http://172.30.1.42:3000/user/info', {
                headers: {
                    "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRsYWNvZG5qczY2N0BhZGlvcy5jb20iLCJ1c2VySWQiOjE5LCJpYXQiOjE2NzQ5ODYzMTIsImV4cCI6MTY3NDk4OTkxMn0.Gz-nV5dOLzHEhfieCkOpVfcjsrtYca0XxE2fnJpkpAE"
                }
            })
                .then(res => {
                    const { data } = res
                    setDefaultData(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        defaultDataHandler()
    }, [])

    // change Function
    const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const pwdChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const phoneChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value)
    }
    const nickNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value)
    }
    const birthdayHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setBirthday(e.target.value)
    }
    const genderHandelr = (e: ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value)
    }

    // 이미지 change 이벤트 함수
    const changeHandler = () => {
        setPostFile(imgRef.current?.files[0])
        const viewFile = imgRef.current?.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(viewFile);
        reader.onloadend = () => {
            setImgView(reader.result)
        }
    }

    // confirm 버튼 Function
    const filePostHandler = async () => {
        try {
            await axios.patch('http://172.30.1.42:3000/user/info',
                {
                    name: name || defaultData?.name,
                    userPassword: password,
                    email: email || defaultData?.email,
                    birthday: birthday || (defaultData?.birthday ? getDate(defaultData.birthday) : ''),
                    nickname: nickname || defaultData?.nickname,
                    file: postFile,
                    thumbnail: defaultData?.thumbnail,
                    gender: gender || defaultData?.gender,
                    phone: phone || defaultData?.phone,
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRsYWNvZG5qczY2N0BhZGlvcy5jb20iLCJ1c2VySWQiOjE5LCJpYXQiOjE2NzQ5ODYzMTIsImV4cCI6MTY3NDk4OTkxMn0.Gz-nV5dOLzHEhfieCkOpVfcjsrtYca0XxE2fnJpkpAE"
                    }
                }
            )
                .then(res => {
                    if (res) {
                        console.log(res);
                        alert(res.data.message)
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <S.Contain>
            <S.Title>회원정보 수정</S.Title>
            <S.UpperBox>
                <S.UserBox>
                    <S.Label htmlFor='name'>이름</S.Label>
                    <S.Input
                        type='text'
                        id='name'
                        defaultValue={defaultData?.name ?? ""}
                        onChange={nameChangeHandler}
                    />
                    <S.Label htmlFor='nickName'>닉네임</S.Label>
                    <S.Input
                        type='text'
                        id='nickName'
                        defaultValue={defaultData?.nickname ?? ""}
                        onChange={nickNameChangeHandler}
                    />
                    <S.Label htmlFor='email'>이메일</S.Label>
                    <S.Input
                        type='text'
                        id='email'
                        value={defaultData?.email ?? ""}
                        onChange={emailChangeHandler}
                    />
                    <S.Label id='password'>비밀번호</S.Label>
                    <S.Input
                        type='password'
                        id='password'
                        onChange={pwdChangeHandler}
                    />
                    <S.Label htmlFor='phoneNumber'>전화번호</S.Label>
                    <S.Input
                        type='text'
                        id='phoneNumber'
                        defaultValue={defaultData?.phone ?? ""}
                        onChange={phoneChangeHandler}
                    />
                    <S.Label htmlFor='birthday'>생일</S.Label>
                    <S.Input
                        type='date'
                        id='birthday'
                        defaultValue={defaultData?.birthday ? getDate(defaultData.birthday) : ''}
                        onChange={birthdayHandler}
                    />
                    <S.GenderBox>
                        <S.Label>성별</S.Label>
                        <div>
                            <S.GenderLabel htmlFor='male'>남성</S.GenderLabel>
                            <S.GenderRadio type='radio' name='gender' value='male' id='male' onChange={genderHandelr} defaultChecked={defaultData?.gender === 'male'} />
                            <S.GenderLabel htmlFor='female'>여성</S.GenderLabel>
                            <S.GenderRadio type='radio' name='gender' value='female' id='female' onChange={genderHandelr} defaultChecked={defaultData?.gender === 'female'} />
                        </div>
                    </S.GenderBox>
                </S.UserBox>
                <S.UserProfileBox>
                    <S.UserProfileInBox>
                        <S.ProFileImg src={imgView ?? defaultData?.thumbnail} />
                        <S.ProFileImgLabel htmlFor='propfileImg'>프로필 이미지 추가</S.ProFileImgLabel>
                        <S.ProFileImgInput
                            type='file'
                            ref={imgRef}
                            id='propfileImg'
                            onChange={changeHandler}
                            accept='image/*'
                        />
                    </S.UserProfileInBox>
                </S.UserProfileBox>
            </S.UpperBox>
            <S.BottomBox>
                <S.ConfirmButton>취소</S.ConfirmButton>
                <S.ConfirmButton onClick={filePostHandler}>수정하기</S.ConfirmButton>
            </S.BottomBox>
        </S.Contain>
    )
}

export default MypageUserModify