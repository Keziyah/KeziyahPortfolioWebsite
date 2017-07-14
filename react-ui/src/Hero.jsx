import React from 'react'

const Hero = () => {
    return (
        <div className="hero">

            <div className="hero__greeting">
                <h1>Hi. I'm Keziyah, a full stack <br /> software engineer.</h1>
                <h3>I build <em>experiences</em>. <span className="highlight-black">Let me build yours.</span></h3>

                <div className="hero__buttons">
                    <button>Work</button> <button className="hero__buttons--contact">Contact</button>
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