import React from 'react'
import Scroll from 'react-scroll'
const Link = Scroll.Link
const Element = Scroll.Element


const About = (props) => {
    return (
        <div className="section about" id="about">
            <Element name="about">
            <div className="about__main">
                        <div className="about__p">
                            <p>I’m Keziyah, a teacher, traveler, and <span className="highlight">full stack software engineer</span> based in Central Florida.  
                            I use JavaScript frameworks to create responsive websites and interactive <span className="highlight">web and mobile apps.</span> When I'm not coding, I love to travel and watch telenovelas. Feel free to say hi.
                            </p>
                        </div>

                        <div className="about__buttons">
                          
                                <button>
                                    <Link activeClass="active"
                                        to="contact" 
                                        spy={true}
                                        smooth={"easeOutCubic"} 
                                        duration={600}
                                        offset={-100}>
                                    Contact
                                    </Link>
                                </button>
                            

                            <button id="fly" onClick={props.toggleVid}>Watch me fly <i className="material-icons">play_arrow</i></button>

                        </div>
            </div>
            </Element>

            <footer> &copy; Keziyah Lewis 2017.</footer>
        </div>
    )
}

export default About; 