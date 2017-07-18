import React, {Component} from 'react'

class Video extends Component {
    componentDidMount() {
        document.querySelector('video').volume = 0.1;
    }
    render() {
    return (
                <div className="video-container section video">
                    <div className="filter"></div>
                    <video autoPlay controls className="fillWidth">
                        <source src="dubai_zipline.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                        <source src="dubai_zipline.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.

                    </video>  
                    <div id="overlay">
                        <div>
                           <button className="button-black" onClick={this.props.toggleVid}>Go back</button>
                        </div>
                    </div>
                </div>
    )
}
}

export default Video