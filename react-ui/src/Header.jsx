import React from 'react'
import HamburgerMenu from 'react-hamburger-menu'; 

const Header = (props) => {
    return (
        <div className={props.headerClass + " header"}>
            <img src="mylogo.png" alt="my logo"/>

             <div className="hero__burger">
                <HamburgerMenu
                    isOpen={props.open}
                    menuClicked={props.handleClick}
                    width={36}
                    height={30}
                    strokeWidth={3}
                    rotate={0}
                    color='#faebd7'
                    borderRadius={0}
                    animationDuration={0.5}
                />
               </div>
        </div>
    )
}

export default Header; 