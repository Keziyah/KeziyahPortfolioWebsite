import React from 'react'
import CaseHeader from './CaseHeader'

const Lingoly = () => {
    window.scrollTo(0, 0)
    return (
         <div className="lingoly case-study">
           <CaseHeader />

            <div className="project-hero">
                <h1>lingoly</h1>
                <h5>JavaScript | React | Redux | Express | PostgreSQL | Web Speech API</h5>
                <h4>A speech to text speechwriting app for language learners.  
                </h4>
            </div>

            <div className="project-body">
                <p>
                    Most foreign language courses require students to do oral exams or presentations.
                    For students, this is often the most stressful part of the course, and for teachers, it 
                    can be difficult to dedicate time to practice speeches with each student, especially
                    in large classes.   
                </p>

                <p>
                    I was inspired by my experience as an ESL teacher to create Lingoly, my first (solo) 
                    hackathon project. Lingoly helps ESL students independently practice for speaking
                    assignments. They can write speeches by talking, correct their grammar, and perfect their 
                    pronunciation with a pronunciation dictionary.               
                </p>

                 <div className="project-body__image">
                    <img src="lingolyDesktop.png" alt="mockup of lingoly homepage on desktop"/>
                </div>

                <p>
                    Students can write by speaking using the Web Speech API, correct their grammar with 
                    LanguageTool.org’s API, and check their pronunciation using a Merriam Webster API. 
                    The app uses Redux to manage state, React to render the views, and PostgreSQL to allow
                    students to save their speeches.  
                </p>

            </div>

            <div className="project-end">

                <div className="project__links">

                            <div className="project__links-icon">
                                <a href="http://github.com/keziyah/lingoly" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>

                            <div className="project__links-icon">
                                <a href="http://www.youtube.com/watch?v=0DvmqlenAXI" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-youtube-square fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>

                </div>
            </div>
            <footer> &copy; Keziyah Lewis 2017.</footer>
        </div>
    )
}

export default Lingoly