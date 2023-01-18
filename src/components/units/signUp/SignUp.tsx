

const SignUp = () => {
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
                    <input type='text' />
                    <label>전화번호</label>
                    <input type='text' />
                </div>
                <div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <label htmlFor='propfileImg'>프로필 이미지 추가</label>
                        <input type='file' id='propfileImg' accept='image/*' />
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

            </div>
        </div>
    )
}

export default SignUp