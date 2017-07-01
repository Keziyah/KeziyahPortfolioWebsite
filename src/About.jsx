import React from 'react'

const About = (props) => {
    return (
        <div className="section about">
            <div className="project__type">
                <p>{props.text}</p>
            </div>
            <div className="about__main">
                        <div className="about__img">
                            <img src="myFace.jpg" />
                        </div>

                        <div className="about__p">
                            <p>I’m Keziyah, a teacher, traveler, and fullstack software engineer based in NYC, specializing in the NERDS (Node.js, Express, React (w/ Redux), Databases using SQL) stack, but always curious to learn more. Currently working on side
                            projects and looking for a full time engineering gig in New York, DC, or remote.  Feel free to say hi.
                            </p>
                        </div>
                        <div className="about__contact">
                            <div className="about__contact-icon">
                                <a href="https://www.linkedin.com/in/keziyah/">
                                    <i className="fa fa-linkedin fa-5x" aria-hidden="true"></i>
                                    <p className="logo-text">linkedin.com/in/keziyah</p>
                                </a>
                            </div>

                            <div className="about__contact-icon">
                                <a href="https://github.com/Keziyah/">
                                    <i className="fa fa-github fa-5x" aria-hidden="true"></i>
                                    <p className="logo-text">github.com/keziyah</p>
                                </a>
                            </div>

                            <div className="about__contact-icon">
                                <a href="https://twitter.com/KeziyahL">
                                    <i className="fa fa-twitter fa-5x" aria-hidden="true"></i>
                                    <p className="logo-text">twitter.com/keziyahL</p>
                                </a>
                            </div>

                            <div className="about__contact-icon">
                                <a href="mailto:hello@keziyah.com">
                                    <i className="fa fa-envelope fa-5x" aria-hidden="true"></i>
                                    <p className="logo-text">hello@keziyah.com</p>
                                </a>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default About; 