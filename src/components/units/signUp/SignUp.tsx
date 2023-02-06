import axios from 'axios'
import { useRouter } from 'next/router';
import { ChangeEvent, useRef, useState } from 'react'
import * as S from './SignUp.style'

const SignUp = () => {
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
    // user post data error state
    // const [nameError, setNameError] = useState('')
    // const [emailError, setEmailError] = useState('')
    // const [passwordError, setPasswordError] = useState('')
    // const [phoneError, setPhoneError] = useState('')
    // const [birthdayError, setBirthdayError] = useState('')
    // const [nicknameError, setNicknameError] = useState('')
    // const [genderError, setGenderError] = useState('')
    const router = useRouter()

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
    console.log(postFile)
    // confirm 버튼 Function
    const filePostHandler = async () => {
        try {
            await axios.post('http://172.16.101.103:3000/user/create',
                {
                    name,
                    password,
                    email,
                    birthday,
                    nickname,
                    file: postFile,
                    gender,
                    phone,
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )
                .then(res => { console.log(res); })
                .then(data => { console.log(data); })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <S.Contain>
            <S.Title>회원가입</S.Title>
            <S.UpperBox>
                <S.UserBox>
                    <S.Label htmlFor='name'>이름</S.Label>
                    <S.Input type='text' id='name' onChange={nameChangeHandler} />
                    <S.Label htmlFor='nickName'>닉네임</S.Label>
                    <S.Input type='text' id='nickName' onChange={nickNameChangeHandler} />
                    <S.Label htmlFor='email'>이메일</S.Label>
                    <S.Input type='text' id='email' onChange={emailChangeHandler} />
                    <S.Label id='password'>비밀번호</S.Label>
                    <S.Input type='password' id='password' onChange={pwdChangeHandler} />
                    <S.Label htmlFor='phoneNumber'>전화번호</S.Label>
                    <S.Input type='text' id='phoneNumber' onChange={phoneChangeHandler} />
                    <S.Label htmlFor='birthday'>생일</S.Label>
                    <S.Input type='date' id='birthday' onChange={birthdayHandler} />
                    <S.GenderBox>
                        <S.Label>성별</S.Label>
                        <div>
                            <S.GenderLabel htmlFor='male'>남성</S.GenderLabel>
                            <S.GenderRadio type='radio' name='gender' value='male' id='male' onChange={genderHandelr} />
                            <S.GenderLabel htmlFor='female'>여성</S.GenderLabel>
                            <S.GenderRadio type='radio' name='gender' value='female' id='female' onChange={genderHandelr} />
                        </div>
                    </S.GenderBox>
                </S.UserBox>
                <S.UserProfileBox>
                    <S.UserProfileInBox>
                        <S.ProFileImg src={imgView ?? '/images/userIconImg.png'} />
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
                <S.ConfirmButton
                    onClick={async () => await router.push('/sign-in')}
                >
                    취소
                </S.ConfirmButton>
                <S.ConfirmButton onClick={filePostHandler}>회원가입</S.ConfirmButton>
            </S.BottomBox>
        </S.Contain>
    )
}

export default SignUp