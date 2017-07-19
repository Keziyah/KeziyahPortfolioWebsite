import React from 'react'
import {Link} from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'

const Projects = () => {
    return (
        <div className="section projects" >
            <div className="section-title">
                <h3>Featured Projects</h3>
            </div>

            <div className="quote">
                <ScrollAnimation animateIn="pulse" initiallyVisible={true}>
                    <h1>
                        I didn't become a morning <br/>
                        person until I started doing <br/>
                        what I loved.
                    </h1>
                </ScrollAnimation>
            </div>

            <div id="projects" className="quote-name">
                <h3>- Issa Rae</h3>
            </div>

            <div className="projects__links">  
                <Link to="/spacechat">
                    <div className="spacechat project-div">
                        <div className="spacechat-logo project-logo"><img src="spacechatlogo.png" alt="spacechat logo"/></div>
                        <div className="spacechat-info project-info">
                            <p>Express | Socket.io | React | WebVR</p>
                        </div>
                    </div>
                </Link>

                <Link to="/lingoly">
                    <div className="lingoly project-div">
                        <div className="lingoly-logo project-logo"><img src="lingolylogo.png" alt="lingoly logo" /></div>
                        <div className="spacechat-info project-info">
                            <p>Web Speech API | React | Redux</p>
                        </div>
                    </div>
                </Link>

                <Link to="/covfefe">
                    <div className="covfefe project-div">
                        <div className="covfefe-logo project-logo"><img src="covfefe.png" alt="covfefe letter logo" /></div>
                        <div className="spacechat-info project-info">
                            <p>IBM Watson | JavaScript</p>
                        </div>
                    </div>
                </Link>

                {/* <Link to="/life">
                    <div className="life project-div">
                        <div className="life-logo project-logo"><img src="life.png" alt="life solutions counseling logo" /></div>
                        <div className="spacechat-info project-info">
                            <p>Design</p>
                        </div>
                    </div>
                </Link> */}
            </div> 
        </div>
    )
}

export default Projects
