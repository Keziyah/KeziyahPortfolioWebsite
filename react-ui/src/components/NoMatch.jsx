import React from 'react'
import CaseHeader from './CaseHeader'

const NoMatch = () => {
    return (
         <div className="no-match case-study section">
           <CaseHeader />

            <div style={{height: "85vh"}}>
                
                <h1>Page not found. </h1>
            </div>
            <footer> &copy; Keziyah Lewis 2017.</footer>
        </div>
    )
}

export default NoMatch