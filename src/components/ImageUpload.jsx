import React, { useState } from 'react'
import '../App.css'


const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState(null)
  const [imageAlt, setImageAlt] = useState(null)
  
  const handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]')
    const formData = new FormData()
    formData.append('file', files[0])
    // replace this with your upload preset name
    formData.append('upload_preset', 'zuqwnlys');
    
    const options = {
      method: 'POST',
      body: formData,
    }

    return fetch('https://api.Cloudinary.com/v1_1/dchrr8nak/image/upload', options)
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
          <h3>Upload an image</h3>
          <form>
            <div className="form-group">
              <input type="file"/>
            </div>
            <button type="button" className="btn" onClick={handleImageUpload}>Submit</button>
          </form>
        </section>
        <section className="right-side">
          {imageUrl && (
            <img src={imageUrl} alt={imageAlt} className="displayed-image" style={{width: "300px"}}/>
          )}
        </section>
      </main>
    )
  }

  export default ImageUpload