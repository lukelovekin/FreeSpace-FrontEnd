import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import {Image} from 'cloudinary-react'

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState(null)
  const [imageAlt, setImageAlt] = useState(null)
  
  const handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]')
    const formData = new FormData()
    formData.append('file', files[0])
    // replace this with your upload preset name
    formData.append('upload_preset', 's1eejaxy');
    const options = {
      method: 'POST',
      body: formData,
    }

    return fetch('https://api.Cloudinary.com/v1_1/dt8aodbvm/image/upload', options)
      .then(res => res.json())
      .then(res => {
        setImageUrl(res.secure_url)
        setImageAlt(`An image of ${res.original_filename}`)
        })
      .catch(err => console.log(err))
  }


    return (
      <main className="App">
        <section className="left-side">
          <form>
            <div className="form-group">
              <input type="file"/>
            </div>

            <button type="button" className="btn" onClick={handleImageUpload}>Submit</button>
            <button type="button" className="btn widget-btn">Upload Via Widget</button>
          </form>
        </section>
        <section className="right-side">
          <p>The resulting image will be displayed here</p>
          {imageUrl && (
            <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
          )}
        </section>
      </main>
    )
  }


  export default ImageUpload