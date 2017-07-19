import React from 'react'
import {Link} from 'react-router-dom'

const CaseHeader = () => {
    return (
        <div className="header-project header">
                <img src="mylogo.png" alt="my logo"/>
    
                    <nav>

                        <Link to="/"><h3>Home</h3></Link>

                        <a href="/#projects"><h3>Work</h3></a>

                        <a href="/#contact"><h3>Contact</h3></a>

                        <a href="/#about"><h3>About</h3></a>

                    </nav>
            </div>
    )
}

export default CaseHeader