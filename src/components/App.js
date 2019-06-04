import React, {Component} from 'react';

import BasicForm  from "./BasicForm";
import ContactsForm from './ContactsForm';
import AvatarForm from './AvatarForm';

 
export default class App extends Component {

  state = {
    username: '',
    password: '',
    repeatPassword: '',
    country: '1',
    city: 'Select city', 
    gender: 'male',
    agree: true,
    age: 0 , 
    lastname: '',
    email: '',
    mobile: 0,
    errors: {
      username: false,
      password: false,
      repeatPassword: false,
      age: false
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
          <button type="submit" className="btn btn-primary w-100"
                  onClick={this.onSubmit}> Submit</button>

        </form>
        <BasicForm error={this.state.errors}/>
        <ContactsForm />
        <AvatarForm />
      </div>
    );
  }
}



