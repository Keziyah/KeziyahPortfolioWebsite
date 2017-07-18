import React from 'react'
import Scroll from 'react-scroll'
const Element = Scroll.Element


const HireMe = (props) => {
    return (
        <div className="section hireme" >
            <div className="section-title">
                <h3>Hire Me</h3>
            </div>

            <div className="quote">
                <h1>
                    I believe luck is preparation<br/>
                    meeting opportunity. <br/>
                </h1>
            </div>

            <div className="quote-name">
                <h3>- Oprah Winfrey</h3>
            </div>

           <div className="hireme__bottom">
            <Element name="contact">
                <div className="hireme__available">
                    <h1>I'm <span className="highlight-white">available</span></h1>
                </div>
            </Element>

            <div className="hireme__job">
                <h3>For a full time remote engineering role, <br/>
                or front-end/full stack individual projects.</h3>
            </div>

            <div className="hireme__links">
                 <div className="hireme__links-icon">
                                <a href="https://www.linkedin.com/in/keziyah/">
                                    <i className="fa fa-linkedin fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>

                            <div className="hireme__links-icon">
                                <a href="https://github.com/Keziyah/">
                                    <i className="fa fa-github fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>

                            <div className="hireme__links-icon">
                                <a href="https://twitter.com/KeziyahL">
                                    <i className="fa fa-twitter fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>

                            <div className="hireme__links-icon">
                                <a href="mailto:hello@keziyah.com">
                                    <i className="fa fa-envelope fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                            
                            <div className="hireme__hello">
                                <img src="hello.png" alt="hello at keziyah dot com" />
                            </div>
                        </div>
                    </div>
    )
} 

export default HireMe