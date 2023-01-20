import axios from 'axios'
import { useRef, useState } from 'react'


const ReviewWrite = () => {
    const imgRef = useRef<any>(null)
    const [postFile, setPostFile] = useState<any>([])

    const changeHandler = () => {
        setPostFile((prev: any) => [...prev, imgRef.current?.files[0]])
        // setPostFile(imgRef.current?.files[0])
        // console.log('1', postFile)
    }

    const postHandler = async () => {
        try {
            console.log('2', postFile)
            await axios.post('http://172.20.10.2:3000/review/product', {
                files: postFile
            }, {
                headers: { "Content-Type": "multipart/form-data" }
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <input type='file' ref={imgRef} onChange={changeHandler} accept=".gif, .jpg, .png" />
            <button onClick={postHandler}>post</button>
        </div>
    )
}

export default ReviewWrite