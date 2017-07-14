import React, {Component} from 'react'
import YouTube from 'react-youtube'

export default class ProjectDetail extends Component {
    constructor() {
        super()

        this.state = {  //Dimensions of Youtube embed
            vidWidth: '640', 
            vidHeight: '390',
            width: 1100
        }

        this.updateDimensions = this.updateDimensions.bind(this)
    }

    updateDimensions() {
        var width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        
        this.setState({width: width}, () => {
            if (width < 1100) {
            this.setState({vidWidth: (.9 * width) + ""}) 
            this.setState({vidHeight: '250'})
        } else {
            this.setState({vidWidth: '640'}) 
            this.setState({vidHeight: '390'})
        }
        })
    }

    componentWillMount() {
        this.updateDimensions()
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    render() {

        const opts = {width: this.state.vidWidth, height: this.state.vidHeight}
    return (
        <div className="section details">
                <div className="details__project">
                    <div className="details__project--left">
                        <h3>{this.props.name} &nbsp;</h3>
                    </div>

                    <div className="details__project--right">
                        <h3> | {this.props.stack}</h3>
                    </div>
                </div>

                <div className="details__main">
                    <div className="details__video">
                        <YouTube videoId={this.props.videoId} opts={opts} />
                    </div>

                    <div className="details__text">
                        <div className="details__paragraph">
                            <p className="details__paragraph">{this.props.paragraph1}</p>
                        </div>

                        <div>
                            <p className="details__paragraph">{this.props.paragraph2}</p>
                        </div>

                        <div>
                            <p className="details__paragraph">{this.props.paragraph3}</p>
                        </div>

                        <div>
                            <p className="details__paragraph">{this.props.paragraph4}</p>
                        </div>

                        <div className="details__back">
                            <button onClick={this.props.onClick}>Back</button>
                        </div>
                    </div>
                </div>
        </div>

    )
}
}


