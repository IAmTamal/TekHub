import React, { useEffect } from 'react'
import { editprofilepic, getUser, editUser } from '../service/ProfileApi'

const Test = () => {
    const [image, setImage] = React.useState({ avatar: '' })

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            };
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    const handleImage = async (e) => {
        const base64 = await convertToBase64(e.target.files[0]);
        setImage({ ...image, avatar: base64 })
    }

    const getuser = async () => {
        const response = await getUser()
        if (response.status === 201) {
            setImage({ ...image, avatar: response.data.avatar })
            console.log(typeof (response.data.avatar))
        }
    }

    useEffect(() => {
        getuser()
    }, [])


    const imageUpload = async () => {
        const response = await editUser(image)

        if (response.status === 201) {
            getuser()
        }
    }
    return (
        <>

            <div class="mb-3 container">
                <label for="formFile" class="form-label">Upload image</label>
                <input class="form-control" type="file" id="formFile" accept="image/png, image/gif, image/jpeg" onChange={handleImage} name="avatar" />
                {/* <button className='btn btn-info mt-5' onClick={imageUpload}>Upload</button> */}



                <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
                    <img src={image.avatar} alt="avatar" style={{ height: "300px", width: "300px", borderRadius: "10px", objectFit: "cover" }} />
                </div>

            </div>



        </>
    )
}

export default Test