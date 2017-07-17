import React from 'react'

const Video = (props) => {

    return (
                <div className="video-container section video">
                    <div className="filter"></div>
                    <video autoPlay controls className="fillWidth">
                        <source src="dubai_zipline.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                        <source src="dubai_zipline.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                    </video>
                     <div className="poster hidden">
                        <img src="dubai_zipline.png" alt="Keziyah ziplining in Dubai." />
                    </div>   
                    <div id="overlay">
                        <div>
                           <button className="button-black" onClick={props.toggleVid}>Go back . </button>
                        </div>
                    </div>
                </div>
    )
}

export default Video