import React, {Component} from 'react'

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    e.stopPropagation()
    console.log(this.state)
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit.bind(this)} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              onChange={this.handleChange.bind(this)} />
          </div>
          <div className="input-field">
            <label htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
