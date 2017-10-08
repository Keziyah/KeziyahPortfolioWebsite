import React from 'react'
import CaseHeader from './CaseHeader'

const Bladress = () => {
    window.scrollTo(0, 0)
    return (
        <div className="life case-study">
           <CaseHeader />

            <div className="project-hero">
                <h1>The Bladress</h1>
                <h5>Design | HTML | CSS | jQuery | Wordpress | Wireframes using Sketch</h5>
                <h4>A website redesign for a badass female long distance rollerblader.  
                </h4>
            </div>

            <div className="project-body">
                <p>
                The Bladress aims to set the Guinness World Record for the longest journey on inline skates, while raising money for girls' education, during an 8 month tour in Europe. She needed a well designed, interactive website that would encourage others to support her journey and the cause.       
                </p>

                <div className="project-body__image">
                    <img src="bladehero.png" alt="mockup of the bladress homepage"/>
                </div>

                <p>
                      The Bladress is all about female empowerment. Femininity and strength, two things that are not mutually exclusive, heavily influenced my design process, including my choice of fonts and colors.  
                </p>

                <div className="project-body__image">
                    <img src="bladeabout.png" alt="mockup of the bladress homepage"/>
                </div>

                <div className="project-body__image">
                    <img src="bladedonate.png" alt="mockup of the bladress homepage"/>
                </div>

                <p>
                      The website was designed in Sketch, developed using modern frontend tools like Gulp and SCSS, and uses WordPress as a CMS. You can view the project <a href="http://thebladress.com" target="_blank" rel="noopener noreferrer">here</a>.  
                </p>

                <div className="project-body__image">
                    <img src="blademap.png" alt="mockup of the bladress homepage"/>
                </div>

            </div>

            <div className="project-end">

                <div className="project__links">
                    <div className="project__links-icon">
                        <a href="http://thebladress.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-link fa-5x" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
            <footer> &copy; Keziyah Lewis 2017.</footer>
        </div>
    )
}

export default Bladress