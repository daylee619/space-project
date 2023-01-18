import axios from 'axios'
import { useRef, useState } from 'react'
import * as S from './SignUp.style'

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
        const formData = new FormData();
        formData.append('file', postFile);
        try {
            await axios.post('api', {
                formData
            })
                .then(res => { console.log(res); })
                .then(data => { console.log(data); })
        } catch (error) {
            console.log(error)
        }
    }

    // const [imgFile2, setImgFile2] = useState(null)

    // const changeHandler = (e) => {
    //     setImgFile2(e.target.files[0])
    // }

    // const fileHandler = (e) => {
    //     const formData = new FormData();
    //     formData.append('file', imgFile2);

    //     axios.post('/api/upload', {
    //         formData,
    //         input: 'aa',
    //         aInput: 'bb'
    //     })
    //     .then(res => {})
    // }


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
                <input type='checkbox' />
                <label>여성</label>
                <input type='checkbox' />
            </div>
            <div>
                <button onClick={filePostHandler}>회원가입</button>
            </div>
        </div>
    )
}

export default SignUp