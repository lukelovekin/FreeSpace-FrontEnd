import React from 'react'

export default function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="column">
                    <h1>About FreeSpace</h1>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <img src="./location-arrow-solid.svg" alt="" width="50%" />
                </div>
                <div className="column">
                    <h4>FreeSpace is a portfolio sharing app to connect freelancers and professionals of any kind. Show your work, upload your projects and let the world see what you can do best!</h4>
                </div>
            </div>
            <div className="row"> 
                <div className="column">
                    <h2>How it works?</h2>
                    <p className="subtitle">On this page users will learn about FreeSpace</p>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <img src="./location-arrow-solid.svg" alt="" width="50%" />
                    <br /><br /><strong>Create a Free Account</strong>
                    <p>You can starting using FreeSpace for free, you just need a Google Account and fill our form to create your first portfolio.</p>
                </div>
                <div className="column">
                    <img src="./location-arrow-solid.svg" alt="" width="50%" />
                    <br /><br /><strong>Show your work to the world!</strong>
                    <p>Upload your photos and share your social media so anyone, anywhere can find you. New customer and project partners can contact you via your profile.</p>
                </div>
                <div className="column">
                    <img src="./location-arrow-solid.svg" alt="" width="50%" />
                    <br /><br /><strong>You can customize your template!</strong>
                    <p>Make your work look like your work. Feel free to change the things you want to make your portfolio better and practical for the target audience you want.</p>
                </div>
            </div>
        </div>
    )
}