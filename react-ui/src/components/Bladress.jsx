import React from 'react'
import CaseHeader from './CaseHeader'

const Bladress = () => {
    window.scrollTo(0, 0)
    return (
        <div className="life case-study">
           <CaseHeader />

            <div className="project-hero">
                <h1>The Bladress</h1>
                <h5>Design | HTML | CSS | Wordpress | Wireframes using Sketch</h5>
                <h4>A website redesign for a badass female long distance rollerblader.  
                </h4>
            </div>

            <div className="project-body">
                <p>
                The Bladress aims to set the Guinness World Record for the longest journey on inline skates, while raising money for girls' education, during an 8 month tour in Europe. She needed a well designed, interactive website that would encourage others to support her journey and the cause.       
                </p>

                <div className="project-body__image">
                    <img src="blademockup.png" alt="mockup of the bladress homepage on desktop"/>
                </div>

                <p>
                    This redesign is currently in progress, and will be live by the end of September 2017. 
                </p>
            </div>

            <div className="project-end">

                <div className="project__links">

                            {/* <div className="project__links-icon">
                                <a href="https://github.com/keziyah/lingoly" target="_blank">
                                    <i className="fa fa-github fa-5x" aria-hidden="true"></i>
                                </a>
                            </div> */}
                </div>
            </div>
            <footer> &copy; Keziyah Lewis 2017.</footer>
        </div>
    )
}

export default Bladress