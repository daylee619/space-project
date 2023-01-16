import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { DatePicker, Radio, RadioChangeEvent, Tooltip, Upload } from 'antd';
import { useState } from 'react';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import type { DatePickerProps } from 'antd';
import * as S from './SignUp.style'

const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    // 사진 업로드
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => { resolve(reader.result as string); };
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    // 날짜
    const onChange2: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    // gender 
    const [value3, setValue3] = useState('남성');

    const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
        console.log('radio3 checked', value);
        setValue3(value);
    };

    const options = [
        { label: '남성', value: '남성' },
        { label: '여성', value: '여성' },
    ];

    return (
        <S.Contain>
            <S.UperBox>
                <S.UserDataBox>
                    <S.NameBox>
                        <S.Label>이름</S.Label>
                        <S.NameInput placeholder="your name" />
                    </S.NameBox>
                    <S.EmailBox>
                        <S.Label>이메일</S.Label>
                        <S.EmailInput
                            placeholder="Enter your E-mail"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            suffix={
                                <Tooltip title="정확한 이메일을 입력해 주세요">
                                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>
                            }
                        />
                    </S.EmailBox>
                    <S.PasswordBox>
                        <S.Label>비밀번호</S.Label>
                        <S.PasswordInput
                            placeholder="input password"
                            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        />
                    </S.PasswordBox>
                    <S.PhoneContain>
                        <S.PhoneBox>
                            <S.Label>전화번호</S.Label>
                            <S.NameInput placeholder="your phone number" />
                        </S.PhoneBox>
                    </S.PhoneContain>
                    <S.DateBox>
                        <S.Label>생일</S.Label>
                        <DatePicker style={{ width: '500px', height: '45px' }} size='large' onChange={onChange2} />
                    </S.DateBox>
                    <S.GenderBox>
                        <S.Label>성별</S.Label>
                        <Radio.Group options={options} onChange={onChange3} value={value3} optionType="button" />
                    </S.GenderBox>
                </S.UserDataBox>
                <S.UserImageBox>
                    <S.UploadBox>
                        <Upload
                            action="url"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 1 && '+ Upload'}
                        </Upload>
                    </S.UploadBox>
                </S.UserImageBox>
            </S.UperBox>
            <S.ConfirmBox>
                <S.DeleteButton>취소</S.DeleteButton>
                <S.ConfirmButton>회원가입</S.ConfirmButton>
            </S.ConfirmBox>
        </S.Contain>
    )
}

export default SignUp