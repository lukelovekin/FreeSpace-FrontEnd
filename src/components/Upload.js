import React, { useState } from 'react'
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react'
import axios from 'axios'

export default function Upload() {

    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'freespace')
        setLoading(true)

        const res = await axios.post(" https://api.cloudinary.com/v1_1/danpozzvi/upload", data )

        const file = await res.json()

        console.log(file)

        setImage(file.secure_url)
        setLoading(false)
    }

    return (
        <div>
            <h3>Image Upload</h3>
            <input type='file' name="file" placeholder="upload image" onChange={uploadImage}
            />

            {
                loading?(
                    <h4>Loading...</h4>
                ) : (
                    <img src={image} style={{width: '300px'}}/>
                )

            }
        </div>
    )
}
