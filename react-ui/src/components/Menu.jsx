import React from 'react'; 

const Menu = (props) => {
    return (
        <div className={props.open ? "open menu-div section" : "closed menu-div section"}>
            <h1>Home</h1>
            <h1>Work</h1>
            <h1>Contact</h1>
            <h1>About</h1>
        </div>
    )
}

export default Menu; 