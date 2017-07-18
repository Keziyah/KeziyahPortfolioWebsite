import React from 'react'; 
import Scroll from 'react-scroll'
const Link = Scroll.Link

const Menu = (props) => {
    return (
        <div className={props.open ? "open menu-div section" : "closed menu-div section"}>
            <h1>Home</h1>
            <Link activeClass="active"
                     to="projects" 
                     spy={true}
                    smooth={"easeOutCubic"} 
                    duration={600}
                    >
                <h1>Work</h1>
            </Link>
            <h1>Contact</h1>
            <h1>About</h1>
        </div>
    )
}

export default Menu; 