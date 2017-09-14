import React from 'react'
import CaseHeader from './CaseHeader'

const Life = () => {
    window.scrollTo(0, 0)
    return (
        <div className="life case-study">
           <CaseHeader />

            <div className="project-hero">
                <h1>Life Solutions Counseling</h1>
                <h5>Design | HTML | CSS | Wireframes using Sketch</h5>
                <h4>A redesign for a counseling service’s website. 
                </h4>
            </div>

            <div className="project-body">
                <p>
                    Life Solutions Counseling is a mental health counseling practice in Kissimmee, Florida. The old version of the site was made with a Wix template, and had an outdated look. I wanted to give the website a
                    hand crafted, modern, positive, and professional look that would encourage site visitors to contact the practice
                    for services.      
                </p>

                <div className="project-body__image">
                    <img src="lscmockup.png" alt="mockup of life solutions counseling homepage on desktop"/>
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

export default Life