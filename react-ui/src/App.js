import React, { Component } from 'react'
import Hero from './Hero'
import Project from './Project'
import ProjectDetail from './ProjectDetail'
import {project1, project2, project3} from './details.js'
import About from './About'
import './sass/stylesheets/main.css'


class App extends Component {
    constructor() {
        super()

        this.state = {
            project1: true, ///true: front, false: back
            project2: true,
            project3: true
        }

        this.toggle1 = this.toggle1.bind(this)
        this.toggle2 = this.toggle2.bind(this)
        this.toggle3 = this.toggle3.bind(this)
    }

    toggle1() {
        this.setState({ project1: !this.state.project1 })
    }

    toggle2() {
        this.setState({ project2: !this.state.project2 })
    }

    toggle3() {
        this.setState({ project3: !this.state.project3 })
    }


    render() {
        return (
            <div className="container">
                <Hero />
                 {this.state.project2 ?
                    <Project name={"spacechat"} tagline={"A virtual reality smart chatroom with real-time language translation and sentiment analysis."} sectionId={"spacechat"} headerId={"spacechat-header"} text={"Projects"} particlesId={"stars"} onClick={this.toggle2} />
                    : <ProjectDetail onClick={this.toggle2} name={project2.name} url={project2.url} stack={project2.stack} paragraph1={project2.paragraph1} paragraph2={project2.paragraph2} paragraph3={project2.paragraph3} paragraph4={project2.paragraph4} videoId={"Nbz4PqjrLhg"}/>
                }
                {this.state.project1 ?
                    <Project name={"lingoly"} tagline={"a speech to text speechwriting app for language learners"} sectionId={"lingoly"} headerId={"lingoly-header"} text={"Projects"} onClick={this.toggle1} />
                    : <ProjectDetail onClick={this.toggle1} name={project1.name} url={project1.url} stack={project1.stack} paragraph1={project1.paragraph1} paragraph2={project1.paragraph2} paragraph3={project1.paragraph3} paragraph4={project1.paragraph4} videoId={"0DvmqlenAXI"}/>
                }
                {this.state.project3 ?
                <Project name={"Animations in React"} tagline={"Learn to animate React with higher order components, TweenMax, and more..."} sectionId={"animations"} headerId={"animations-header"} text={"Projects"} onClick={this.toggle3}/>
                : <ProjectDetail onClick={this.toggle3} name={project3.name} url={project3.url} stack={project3.stack} paragraph1={project3.paragraph1} paragraph2={project3.paragraph2} paragraph3={project3.paragraph3} paragraph4={project3.paragraph4} videoId={"rxnfzv_Ff9Q"}/>
                }
                <About text={"About / Contact"} />
            </div>
        )
    }
}

export default App;

