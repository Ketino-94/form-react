import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import countries from "../data/countries"; 

export default class App extends Component {

  state = {
    username: '',
    password: '',
    repeatPassword: '',
    country: '1'
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.username.value , this.password.value);
  }

  getOptionsItem = (items) => {
    return items.map(item => (
      <option key={item.id} value={item.id}>{item.name}</option>
    ));
  }

  render() {
    // console.log(this);

    // const getCountries = countries.map(country => (
    //   <option key={country.id} value={country.id}>{country.name}</option>
    // ));

    return(
      <div className="form-container card">
        <form className="form card-body">
          <div className="form-group">
            <label>Username</label>
            <input type="text" 
                    className="form-control"
                    placeholder="Enter username"
                    ref={node => (this.username = node)} 
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="text" 
                    className="form-control"
                    placeholder="Enter password"
                    ref={node => (this.password = node)} 
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Repeat password</label>
            <input type="text" 
                    className="form-control"
                    placeholder="Enter repeat password"
                    ref={node => (this.repeatPassword = node)} 
                    name="repeatPassword"
                    value={this.state.repeatPassword}
                    onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select className="form-control" id="country"
                    name="country"
                    value={this.state.country}
                    onChange={this.onChange}>
                    {this.getOptionsItem(countries)}
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100"
                  onClick={this.onSubmit}> Submit</button>

        </form>
      </div>
    );
  }
}



