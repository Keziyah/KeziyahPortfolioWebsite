import React from 'react'
import Scroll from 'react-scroll'
const Link = Scroll.Link

const Hero = (props) => {
    return (
        <div className="hero">

            <div className="hero__greeting">
                <h1>Hi. I'm Keziyah, a full stack <br /> software engineer.</h1>
                <h3>I build <em>experiences</em>. <span className="highlight-black">Let me build yours.</span></h3>

                <div className="hero__buttons">
                    <Link activeClass="active"
                     to="projects" 
                     spy={true}
                    smooth={"easeOutCubic"} 
                    duration={600}
                    >
                        <button>Work</button>
                    </Link>
                    
                    <Link activeClass="active"
                     to="contact" 
                     spy={true}
                     smooth={"easeOutCubic"} 
                     duration={600}>
                        <button className="hero__buttons--contact">Contact</button>
                    </Link>
                 </div>
            </div>
            <div className="scroll-downs">
                <div className="mousey">
                    <div className="scroller"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero; 