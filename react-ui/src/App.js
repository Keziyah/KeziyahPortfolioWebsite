import React, { Component } from 'react'
import Menu from './Menu'
import Header from './Header'
import Hero from './Hero'
import Projects from './Projects'
import HireMe from './HireMe'
import About from './About'
import Video from './Video'
import './sass/stylesheets/main.css'


class App extends Component {
    constructor() {
        super()

        this.state = {
            open: false, 
            scrollY: 0, 
            headerClass: "", 
            showVid: false 
        }

        this.handleBurgerClick = this.handleBurgerClick.bind(this); 
        this.runOnScroll = this.runOnScroll.bind(this)
        this.toggleVid = this.toggleVid.bind(this)
    }

    runOnScroll(e) {
        let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
        let lastY = this.state.scrollY

        this.setState({scrollY: scrollY}, () => {
            if(this.state.scrollY === 0) {
                this.setState({headerClass: ""})
            }
            else if(this.state.scrollY - lastY > 0 && this.state.scrollY > 70) {
                this.setState({headerClass: "header--invisible"})
            } else if (this.state.scrollY - lastY < 0 && this.state.scrollY > 70) {
                this.setState({headerClass: "header--background"})
            }
        })
    }   

    componentDidMount() {
        window.addEventListener('scroll', this.runOnScroll)
    }

    handleBurgerClick() {
        this.setState({open: !this.state.open})
        console.log("state", this.state)
    }

    toggleVid() {
        this.setState({showVid: !this.state.showVid})
    }

    render() {
        return (
            <div className="container" onScroll={console.log(window.scrollY)}>
                <Header open={this.state.open} handleClick={this.handleBurgerClick} headerClass={this.state.headerClass}/>
                <div className="menu" style={{display: this.state.open ? "" : "none"}}>
                    <Menu/>
                </div>

                <div className="page-content" style={{display: !this.state.open ? "" : "none"}}>
                    <Hero />
                    <Projects />
                    <HireMe />
                    {
                        this.state.showVid ? <Video toggleVid={this.toggleVid}/> : <About toggleVid={this.toggleVid}/>
                    }
                </div>
            </div>
        )
    }
}

export default App;

