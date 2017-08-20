import React from 'react'
// import ScrollAnimation from 'react-animate-on-scroll'
import Scroll from 'react-scroll'
const Element = Scroll.Element


const HireMe = (props) => {
    return (
        <div className="section hireme" >
            <div className="section-title">
                <h3>Hire Me</h3>
            </div>

            <div className="quote" id="contact">
                {/* <ScrollAnimation animateIn="pulse" initiallyVisible={true}> */}
                    <h1>
                        I believe luck is preparation<br/>
                        meeting opportunity. <br/>
                    </h1>
                {/* </ScrollAnimation> */}
            </div>

            <div className="quote-name">
                <Element name="contact">
                    <h3>- Oprah Winfrey</h3>
                </Element>
            </div>

           <div className="hireme__bottom">
                    <div className="hireme__available">
                        <h1>Get in <span className="highlight">touch</span></h1>
                    </div>

            {/* <ScrollAnimation animateIn="slideInUp"> */}
                <div className="hireme__job">
                    <h3>If you have an interesting project, a full time<br/> remote engineering role, or just want to<br/> connect, feel free to say hello.</h3>
                </div>
            {/* </ScrollAnimation> */}

            <div className="hireme__links">
                 <div className="hireme__links-icon">
                                <a href="http://www.linkedin.com/in/keziyah/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>

                            <div className="hireme__links-icon">
                                <a href="http://github.com/Keziyah/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>

                            <div className="hireme__links-icon">
                                <a href="http://twitter.com/KeziyahL" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-twitter fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>

                            <div className="hireme__links-icon" id="email-icon">
                                <a href="mailto:hello@keziyah.com">
                                    <i className="fa fa-envelope fa-5x" aria-hidden="true"></i>
                                </a>
                                <p id="email">hello@keziyah.com</p>
                            </div>
                        </div>
                        </div>
                    </div>
    )
} 

export default HireMe