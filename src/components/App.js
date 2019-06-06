import React, {Component} from 'react';

// import BasicForm  from "./BasicForm";
import ContactsForm from './ContactsForm';
// import AvatarForm from './AvatarForm';

 
export default class App extends Component {

  state = {
    agree: true,
    age: 0 , 
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
        {/* <BasicForm />  */}
        <ContactsForm />
        {/* <AvatarForm /> */}
      </div>
    );
  }
}



