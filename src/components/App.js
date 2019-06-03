import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {

  state = {
    username: '',
    password: '',
    repeatPassword: ''
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  onChangeRepeatPassword = (e) => {
    this.setState({
      repeatPassword: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.username.value , this.password.value);
  }

  render() {
    console.log(this);
    return(
      <div className="form-container card">
        <form className="form card-body">
          <div className="form-group">
            <label>Username</label>
            <input type="text" 
                    className="form-control"
                    placeholder="Enter username"
                    ref={node => (this.username = node)} 
                    value={this.state.username}
                    onChange={this.onChangeUsername}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="text" 
                    className="form-control"
                    placeholder="Enter password"
                    ref={node => (this.password = node)} 
                    value={this.state.password}
                    onChange={this.onChangePassword}/>
          </div>
          <div className="form-group">
            <label>Repeat password</label>
            <input type="text" 
                    className="form-control"
                    placeholder="Enter repeat password"
                    ref={node => (this.repeatPassword = node)} 
                    value={this.state.repeatPassword}
                    onChange={this.onChangeRepeatPassword}/>
          </div>
          <button type="submit" className="btn btn-primary w-100"
                  onClick={this.onSubmit}> Submit</button>

        </form>
      </div>
    );
  }
}



