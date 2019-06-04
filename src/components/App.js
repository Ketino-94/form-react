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
    avatar: '',
    age: 0 , 
    errors: {
      username: false,
      password: false,
      repeatPassword: false
    }
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
    
    const errors = {}; 
    if( this.state.username.length < 5) {
      errors.username = 'Must be more 5 characters' ; 
    } 

    if( this.state.password.length < 3) {
      errors.password = 'Must be more 3 characters' ;
    }

    if( this.state.password !== this.state.repeatPassword) {
      errors.repeatPassword = 'Must be equal password' ;
    }

    if(Object.keys(errors).length > 0 ){
      this.setState({
        errors: errors
      })
    } else {
      this.setState({
        errors: {}
      })
      console.log('submit', this.state);
    }
  }

  getOptionsItem = (items) => {
    return items.map(item => (
      <option key={item.id} value={item.id}>{item.name}</option>
    ));
  }

  decrementAge = () => {
    this.setState(prevState => ({
      age: prevState.age - 1 
    }),
    () => {
      if(this.state.age < 3) {
        this.setState({
          errors: {
            age: "Must be more 3"
          }
        })
      } else {
        this.setState({
          errors: {
            age: false
          }
        })
      }
    })
  }

  incrementAge = () => {
    this.setState(prevState => ({
      age: prevState.age + 1 
    }),
    () => {
      if(this.state.age < 3) {
        this.setState({
          errors: {
            age: "Must be more 3"
          }
        })
      } else {
        this.setState({
          errors: {
            age: false
          }
        })
      }
    } )
  }

  render() {
    // console.log(this);

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
            {this.state.errors.username ? (
            <div className="invalid-feedback" >{this.state.errors.username}</div>) : null}
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
            {this.state.errors.password ? (
            <div className="invalid-feedback" >{this.state.errors.password}</div>) : null}
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
            {this.state.errors.repeatPassword ? (
            <div className="invalid-feedback" >{this.state.errors.repeatPassword}</div>) : null}
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
          <div className="form-group">
             <div> <label>Age</label></div>
             <div className="btn-group">
                <button type="button" 
                        className="btn btn-secondary"
                        onClick={this.decrementAge}> - </button>
                <input type="number" 
                        className="form-control"
                        placeholder="Enter age"
                        name="age"
                        value={this.state.age}
                        onChange={this.onChange}/>
                <button type="button" 
                        className="btn btn-secondary"
                        onClick={this.incrementAge}> + </button>
             </div>
             {this.state.errors.age ? (
            <div className="invalid-feedback" >{this.state.errors.age}</div>) : null}
          </div>
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



