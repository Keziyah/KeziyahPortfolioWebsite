import React, { Component } from 'react'
import Scroll from 'react-scroll'
import Header from './Header'
import Hero from './Hero'
import Projects from './Projects'
import HireMe from './HireMe'
import About from './About'
import Video from './Video'
import '../sass/stylesheets/main.css'

const Element = Scroll.Element
// const Events = Scroll.Events
const scroll = Scroll.animateScroll
const scrollSpy = Scroll.scrollSpy

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

    runOnScroll(e) {  //controls the appearance of header on scroll
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
        // Events.scrollEvent.register('begin', function(to, element) {
        //     console.log("begin", arguments)
        // });
    
        // Events.scrollEvent.register('end', function(to, element) {
        //     console.log("end", arguments)
        // });
 
        scrollSpy.update()
        window.addEventListener('scroll', this.runOnScroll)
    }

    componentWillUnmount() {
        // Events.scrollEvent.remove('begin')
        // Events.scrollEvent.remove('end')
        window.removeEventListener('scroll', this.runOnScroll)
    }

    handleBurgerClick() {
        this.setState({open: !this.state.open}, () => {
            if(this.state.open === false) {
                scroll.scrollTo(this.state.scrollY)
            }
        })
        console.log("state", this.state)
    }

    toggleVid() {
        this.setState({showVid: !this.state.showVid})
    }

    render() {
        return (
            <div className="container">
                <Header open={this.state.open} handleClick={this.handleBurgerClick} headerClass={this.state.headerClass}/>

                <div className="page-content">
                    
                    <Element name="home">
                        <Hero workClick={this.scrollToProjects} contactClick={this.scrollToContact}/>
                    </Element>

                    <Element name="projects">
                        <Projects />
                    </Element>

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

