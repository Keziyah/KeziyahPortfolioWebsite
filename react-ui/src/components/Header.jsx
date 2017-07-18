import React from 'react'
import HamburgerMenu from 'react-hamburger-menu'; 
import Scroll from 'react-scroll'
const Link = Scroll.Link

const Header = (props) => {
    return (
        <div className={props.headerClass + " header"}>
            <img src="mylogo.png" alt="my logo"/>
   
                <nav className={props.open ? "open nav" : "closed nav"}>

                    <Link activeClass="active"
                        to="home" 
                        spy={true}
                        smooth={"easeOutCubic"} 
                        duration={600}>
                    <h3>Home</h3>
                    </Link>

                    <Link activeClass="active"
                        to="projects" 
                        spy={true}
                        smooth={"easeOutCubic"} 
                        duration={600}>
                    <h3>Work</h3>
                    </Link>

                    <Link activeClass="active"
                        to="contact" 
                        spy={true}
                        smooth={"easeOutCubic"} 
                        duration={600}
                        offset={-100}>
                    <h3>Contact</h3>
                    </Link>

                    <Link activeClass="active"
                        to="about" 
                        spy={true}
                        smooth={"easeOutCubic"} 
                        duration={600}>
                    <h3>About</h3>
                    </Link>

                </nav>

             <div className="hero__burger">
                <HamburgerMenu
                    isOpen={props.open}
                    menuClicked={props.handleClick}
                    width={36}
                    height={30}
                    strokeWidth={3}
                    rotate={0}
                    color='#eee5f1'
                    borderRadius={0}
                    animationDuration={0.5}
                />
               </div>
        </div>
    )
}

export default Header; 