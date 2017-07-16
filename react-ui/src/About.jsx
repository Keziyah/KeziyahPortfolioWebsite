import React from 'react'

const About = (props) => {
    return (
        <div className="section about">
            <div className="about__main">
                        <div className="about__p">
                            <p>I’m Keziyah, a teacher, traveler, and <span className="highlight-black">full stack software engineer</span> based in NYC.  
                            I use JavaScript frameworks to create responsive websites and interactive <span className="highlight-black">web and mobile apps.</span> When I'm not coding, I love to travel and watch telenovelas. Feel free to say hi.
                            </p>
                        </div>

                        <div className="about__buttons">
                            <button>Contact</button>
                            <button id="fly">Watch me fly</button>
                        </div>
            </div>

            <footer> &copy; Keziyah Lewis 2017.</footer>
        </div>
    )
}

export default About; 