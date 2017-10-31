import React from 'react'
import CaseHeader from './CaseHeader'

const Kursor = () => {
    window.scrollTo(0, 0)
    return (
         <div className="kursor case-study">
              <CaseHeader />
            <div className="project-hero">
                <h1>Kursor</h1>
                <h5>React | Redux | Electron | Node.js | Designed with Sketch App</h5>
                <h4>Journal. Better.</h4>
            </div>

            <div className="project-body">
                <p>
                    Journaling is a great way to process thoughts, keep track of daily events, and relive stress. Unfortunately, I don't journal as much as I'd like to. Sometimes I just forget, don't feel like it, or it seems like I have nothing to write about. 

                    After conducting a survey of fellow journal writers, I found that many people have these same problems with journaling.    
                </p>

                <p>
                   Kursor is a desktop journal app that helps the user overcome writer's block and encourages them to journal more often. Some of its features include 30 day writing plans, guided writing sessions, and automatic reminders. This project is still in development, but you can see a sneak peek below.             
                </p>

                <div className="project-body__image">
                        <img src="kursor_dashboard.png" alt="mockup of kursor dashboard on desktop"/>
                </div>

                <p>&nbsp;</p>
            </div>

            {/* <div className="project-end">

                <div className="project__links">
                            <div className="project__links-icon">
                                <a href="http://covfefe-letter.mybluemix.net/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-link fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>

                            <div className="project__links-icon">
                                <a href="http://github.com/covfefe-Letter/covfefe-letter/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>
                </div>
            </div> */}
            <footer> &copy; Keziyah Lewis 2017.</footer>
        </div>
    )
}

export default Kursor