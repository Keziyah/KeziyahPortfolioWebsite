import React from 'react'
import CaseHeader from './CaseHeader'

const Covfefe = () => {
    return (
         <div className="lingoly case-study">
              <CaseHeader />
            <div className="project-hero">
                <h1>COVFEFE LETTER</h1>
                <h5>JavaScript | Node.js | Loopback | jQuery | IBM Watson APIs </h5>
                <h4>Write better cover letters.   
                </h4>
            </div>

            <div className="project-body">
                <p>
                    Sometimes, you might want an extra pair of eyes to look over your cover letter for that dream job. 
                    Or perhaps, you want a supercomputer to look over it instead.   
                </p>

                <p>
                    Covfefe Letter, a hackathon project that was completed the weekend following <a href="https://www.nytimes.com/2017/05/31/us/politics/covfefe-trump-twitter.html">an unfortunate tweet</a>, is an app that helps you write better cover letters. Users can write or copy and paste their draft into the editor, click “analyze”, and get feedback. The app also generates a word cloud based on keywords from the job description, so that the user can inlclude these in their letter. This app was among the top 5 best projects at the Mobile Monday API First Hackathon (June 2-4, 2017, NYC).              
                </p>

                <p>
                    The hackathon was sponsored by IBM, so we used Loopback as a server, and IBM Watson APIs (Tone Analysis and Natural Language Processing) to provide feedback.   
                </p>

            </div>

            <div className="project-end">

                <div className="project__links">
                            <div className="project__links-icon">
                                <a href="http://covfefe-letter.mybluemix.net/">
                                    <i className="fa fa-link fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>

                            <div className="project__links-icon">
                                <a href="https://github.com/space-chat/space-chat">
                                    <i className="fa fa-github fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>
                </div>
            </div>
            <footer> &copy; Keziyah Lewis 2017.</footer>
        </div>
    )
}

export default Covfefe