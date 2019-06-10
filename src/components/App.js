import React, {Component} from 'react';

import BasicForm  from "./BasicForm";
import ContactsForm from './ContactsForm';
import AvatarForm from './AvatarForm';
import FinishForm from './FinishForm';

 
export default class App extends Component {

  state = {
    activeTab: 3,
    agree: true,
    age: 0 , 
    values: {
      username: "",
      lastname: "",
      password: "",
      repeatPassword: "",
      gender: 'male',
      email: "",
      mobile: "",
      country: 1,
      city: 1,
      avatar: ''
    },
    errors: {
      username: '',
      password: '',
      repeatPassword: '',
      age: '',
      city: '',
      country: '',
      email: '',
      mobile: '',
      avatar: ''
    }
  }

  onChange = (e) => {
    const name = [e.target.name];
    const value = e.target.value;
    this.setState(prevState =>({
      values: {
        ...prevState.values ,
        [name]: value
      }, 
      errors: {
        ...prevState.errors ,
        [name]: ''
      }
    }))
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
    if( this.state.values.username.length < 5) {
      errors.username = 'Must be more 5 characters' ; 
    } 

    if( this.state.values.password.length < 3) {
      errors.password = 'Must be more 3 characters' ;
    }

    if( this.state.values.password !== this.state.values.repeatPassword) {
      errors.repeatPassword = 'Must be equal password' ;
    }
    const validateEmail = email => {
      let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return valid.test(String(email).toLowerCase());
    };

    const validateMobile = mobile => {
      let valid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      return valid.test(mobile);
    };

    if (!validateEmail(this.state.values.email)) {
      errors.email = "Enter valid email";
    }
    if (!validateMobile(this.state.values.mobile)) {
      errors.mobile = "Enter valid number";
    }

    if(this.state.values.city === '') {
      errors.city = "Required";
    }

    if(this.state.values.avatar === '') {
      errors.city = "Required";
    }

    if(Object.keys(errors).length > 0 ){
      this.setState({
        errors: errors
      })
    } else {
      this.setState(prevState => ({
        errors: {},
        activeTab: prevState.activeTab + 1 
      }))
      console.log(this.state.activeTab);
      console.log('submit', this.state);
    }
  }

  getOptionsItem = (items) => {
      return items.map(item => (
      <option key={item.id} value={item.id}>{item.name}</option>
      ));
  }

  getOptionsCity = (items) => {
      let citiesArray = []; 
      for (let key in items){
        if( items[key].country ===  Number(this.state.values.country)) {
          citiesArray.push({ id: key, name: items[key].name });
        }
      }
      
      return citiesArray.map(item => (
        <option key={item.id} value={item.id}>{item.name}</option>
        ));
  }


  render() {
    // console.log(this);

    return(
      <div className="form-container card">
        {this.state.activeTab === 1 && (
          <BasicForm values={this.state.values}
                     errors={this.state.errors}
                     onSubmit={this.onSubmit}
                     onChange={this.onChange}/> 
        ) }
        {this.state.activeTab === 2 && (
          <ContactsForm values={this.state.values}
                        errors={this.state.errors}
                        onSubmit={this.onSubmit}
                        onChange={this.onChange}
                        getOptionsItem={this.getOptionsItem}
                        getOptionsCity={this.getOptionsCity}/>
        ) }
        {this.state.activeTab === 3 && (
          <AvatarForm values={this.state.values}
                      errors={this.state.errors}
                      onSubmit={this.onSubmit}/>
        )}
        {this.state.activeTab === 4 && (
          <FinishForm />
        )}
      </div>
    );
  }
}



