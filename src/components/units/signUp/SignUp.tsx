import axios from 'axios'
import { useRef, useState } from 'react'
import * as S from './SignUp.style'

interface IPostDataType {
    name?: string;
    password?: string;
    email: string;
    birthday?: string;
    nickname?: string;
    thumbnail: string;
    gender?: 'male' | 'female';
    phone?: string;
    address?: string;
    detail_address?: string;
    zip_code?: string;
}


const SignUp = () => {
    // type 수정
    // 보여지는 이미지 저장 
    const [imgView, setImgView] = useState<any>(null);
    // type 수정
    const imgRef = useRef<any>(null)
    // 보내는 이미지 파일 저장
    const [postFile, setPostFile] = useState<any>(null)

    const changeHandler = () => {
        setPostFile(imgRef.current?.files[0])
        const viewFile = imgRef.current?.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(viewFile);
        reader.onloadend = () => {
            setImgView(reader.result)
        }
    }

    const filePostHandler = async () => {
        try {
            await axios.post('http://192.168.232.162:3000/user/create',
                {
                    name: "name",
                    password: 'password',
                    email: 'email',
                    birthday: 'birthday',
                    nickname: 'nickname',
                    thumbnail: postFile,
                    gender: 'male',
                    phone: 'phone',
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
        <div>
            <h1>회원가입</h1>
            <div>
                <div>
                    <label>이름</label>
                    <input type='text' />
                    <label>이메일</label>
                    <input type='text' />
                    <label>비밀번호</label>
                    <input type='password' />
                    <label>전화번호</label>
                    <input type='text' />
                </div>
                <div>
                    <div>
                        <img src={imgView ?? '/images/user.png'} />
                    </div>
                    <div>
                        <S.ProFileImgLabel htmlFor='propfileImg'>프로필 이미지 추가</S.ProFileImgLabel>
                        <S.ProFileImgInput
                            type='file'
                            ref={imgRef}
                            id='propfileImg'
                            onChange={changeHandler}
                            accept='image/*'
                        />
                    </div>
                </div>
            </div>
            <div>
                <span>성별</span>
                <label>남성</label>
                <input type='checkbox' value='male' />
                <label>여성</label>
                <input type='checkbox' value='female' />
            </div>
            <div>
                <button onClick={filePostHandler}>회원가입</button>
            </div>
        </div>
    )
}

export default SignUp