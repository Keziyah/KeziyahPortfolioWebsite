import React, {Component} from 'react'
import {connect} from 'react-redux'
import {sendEmail} from '../redux/email'


class Contact extends Component {
  constructor() {
    super()

    this.state = {
      name: "", 
      email: "", 
      subject: "", 
      message: ""
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubjectChange = this.handleSubjectChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }

  handleSubjectChange(e) {
    this.setState({subject: e.target.value})
  }

  handleMessageChange(e) {
    this.setState({message: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("message", this.state)
  }


  render() {
    return (
      <div>
        <form action="#" className="cf" onSubmit={this.handleSubmit}>

          <div className="half left cf">
              <input type="text" placeholder="Name" id="input-name" value={this.state.value} onChange={this.handleNameChange} />

              <input type="text" placeholder="Email" id="input-email" value={this.state.value} onChange={this.handleEmailChange} />

              <input type="text" placeholder="Subject" id="input-subject" value={this.state.value} onChange={this.handleSubjectChange} />
          </div>

          <div className="half right cf">
              <textarea name="message" id="input-message" placeholder="message" type="text" value={this.state.value} onChange={this.handleMessageChange} />
          </div>

          <input type="submit" value="Submit" id="input-submit" />
        </form>
      </div>
    )
  }
}


export default connect(null, sendEmail)(Contact)

//Form styling by Mark Murray: https://codepen.io/markmurray/pen/JsAhx 