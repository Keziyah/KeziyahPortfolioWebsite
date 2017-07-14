import React, { Component } from 'react'
import Menu from './Menu'
import Header from './Header'
import Hero from './Hero'
import './sass/stylesheets/main.css'


class App extends Component {
    constructor() {
        super()

        this.state = {
            open: false 
        }

        this.handleBurgerClick = this.handleBurgerClick.bind(this); 
    }

    handleBurgerClick() {
        this.setState({open: !this.state.open})
        console.log("state", this.state)
    }

    render() {
        return (
            
            <div className="container">
                <Header open={this.state.open} handleClick={this.handleBurgerClick}/>

                <div className="menu" style={{display: this.state.open ? "" : "none"}}>
                    <Menu/>
                </div>

                <div className="page-content" style={{display: !this.state.open ? "" : "none"}}>
                    <Hero />
                </div>
            </div>
        )
    }
}

export default App;

