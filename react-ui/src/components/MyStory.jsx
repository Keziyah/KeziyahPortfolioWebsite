import React from 'react'
import CaseHeader from './CaseHeader'
import {Link} from 'react-router-dom'

const MyStory = () => {
    window.scrollTo(0, 0)
    return (
        <div>
        <div className="myStory">
            <CaseHeader />
            <div className="myStory__paragraph">
                <h1>About Me</h1>
                <p>
                    After studying sociology, French, and Spanish at the Florida State University, 
                    I went on to work at DC area non-profits. My first year out of college, I worked as a public health educator at an HIV/AIDS service organization for women of
                    color. The following year, I spent weekdays working at a reproductive justice organization, and weekends working at the nation’s largest sexual assault service organization.
                </p>
             
                <p>
                    After this, I wanted to do work that was more challenging, so I decided to pursue teaching. I taught English as a Second Language for an academic year in Madrid, Spain, and another in Riyadh, Saudi Arabia.
                </p>

                <p>
                    Throughout my career, I had always worked with technology in some capacity, and I was always interested in how apps work. More importantly, I was curious about how technology could be used to make my jobs easier. (For example, my frustration with not having enough time and resources to help my Saudi students practice oral presentations inpired me to make <Link to="/lingoly">Lingoly</Link>.)
                </p>

                <p>
                    After returning from the Gulf, I was originally planning to go back abroad in the fall, but I decided to satify my curiosity by learning to code. I started learning JavaScript, was accepted into a selective coding bootcamp a couple months later, and started the program several months after that. 
                </p>

                <p>
                    Now, I’m lucky enough to have a career that gives me the best of what my previous careers offered: purpose, balance, challenge, and creativity.  Every day gives me the opportunity to make cool things, learn, and grow as a developer and designer, and I couldn’t be happier. 
                </p>

                <p>
                    View my resume <a href="KeziyahResume.pdf" target="_blank" rel="noopener noreferrer">here</a>.
                </p>

                {/* <button><a href="/#about">Back</a></button> */}
            </div>
        </div>
        <footer> &copy; Keziyah Lewis 2017.</footer>
        </div>
    )
}

export default MyStory 