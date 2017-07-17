import React from 'react'

const Projects = () => {
    return (
        <div className="section projects" >
            <div className="section-title">
                <h3>Featured Projects</h3>
            </div>

            <div className="quote">
                <h1>
                    I didn't become a morning <br/>
                    person until I started doing <br/>
                    what I loved.
                </h1>
            </div>

            <div className="quote-name">
                <h3>- Issa Rae</h3>
            </div>

          <div className="projects__links">  
            <div className="spacechat-logo project-logo">
                <div><img src="spacechatlogo.png" alt="spacechat logo"/></div>
            </div>

            <div className="lingoly-logo project-logo">
                <div><img src="lingolylogo.png" alt="lingoly logo" /></div>
            </div>

            <div className="covfefe-logo project-logo">
                <div><img src="covfefe.png" alt="covfefe letter logo" /></div>
            </div>

            <div className="life-logo project-logo">
                <div><img src="life.png" alt="life solutions counseling logo" /></div>
            </div>

          </div>  

        </div>
    )
}

export default Projects
