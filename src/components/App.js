import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import countries from "../data/countries"; 

export default class App extends Component {

  state = {
    username: '',
    password: '',
    repeatPassword: '',
    country: '1',
    gender: 'male',
    agree: true,
    avatar: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeAgree = (e) => {
    console.log(e.target.checked);
    this.setState({
      [e.target.name]: e.target.checked
    })
  }

  onChangeAvatar = (e) => {
    const reader = new FileReader();
    reader.onload = e => {
      this.setState({
        avatar: e.target.result
      })
    }

    reader.readAsDataURL(e.target.files[0]);
    // console.log(e.target.files[0]);
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
          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-3 pt-0">Gender</legend>
              <div className="col-sm-9">
                <div className="form-check">
                  <input className="form-check-input" 
                         type="radio" 
                         name="gender" 
                         id="male" 
                         value="male"
                         checked={this.state.gender === "male"} 
                         onChange={this.onChange}/>
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" 
                         type="radio" 
                         name="gender" 
                         id="female" 
                         value="female"
                         checked={this.state.gender === "female"} 
                         onChange={this.onChange} />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="form-check mb-2">
            <input className="form-check-input" 
                    type="checkbox" 
                    id="agree" 
                    name="agree"
                    value={this.state.agree}
                    onChange={this.onChangeAgree} 
                    checked={this.state.agree} />
            <label className="form-check-label" htmlFor="agree">
              Agree
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="avatar">Avatar</label>
            <input  type="file" 
                    className="form-control-file" 
                    name="avatar"
                    id="avatar" 
                    onChange={this.onChangeAvatar}  />
          </div>
          <button type="submit" className="btn btn-primary w-100"
                  onClick={this.onSubmit}> Submit</button>

        </form>
      </div>
    );
  }
}



