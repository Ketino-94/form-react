import React, {Component} from 'react';

import BasicForm  from "./BasicForm";
import ContactsForm from './ContactsForm';
import AvatarForm from './AvatarForm';
import FinishForm from './FinishForm';
import StepItems from './StepItems' ;

 
export default class App extends Component {

  state = {
    activeTab: 1,
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
      city: 0,
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

  onChangeAvatar = (e) => {
    const reader = new FileReader();
    reader.onload = e => {
      this.setState(prevState=>({
        values: {
          ...prevState.values , 
          avatar : e.target.result
        }
      }))
    }

    reader.readAsDataURL(e.target.files[0]);
    // console.log(e.target.files[0]);
  } 



  validateValues = () => {
    // console.log(this.username.value , this.password.value);
    
    const errors = {}; 
    // eslint-disable-next-line default-case
    switch (this.state.activeTab) {
      case 1:
          if( this.state.values.username.length < 5) {
            errors.username = 'Must be more 5 characters' ; 
          } 

          if( this.state.values.lastname.length < 5) {
            errors.lastname = 'Must be more 5 characters' ; 
          }

          if( this.state.values.password.length < 3) {
            errors.password = 'Must be more 3 characters' ;
          }

          if( this.state.values.password !== this.state.values.repeatPassword) {
            errors.repeatPassword = 'Must be equal password' ;
          }
        break;
        case 2:
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
    
          if(this.state.values.city === 0) {
            errors.city = "Required";
          }
        break;
        case 3:
          if( this.state.values.avatar  === '') {
            errors.avatar = 'Required' ;
          }
        break;
    }
    return errors;
  }

  onSubmit = () => {

    const errors = this.validateValues();
    if(Object.keys(errors).length > 0 ){
      this.setState({
        errors: errors
      })
    } else {
      console.log('submit', this.state.values.username, this.state.values.lastname);
      this.setState(prevState => ({
        errors: {},
        activeTab: prevState.activeTab + 1 
      }))
      console.log(this.state.activeTab);
    }
  }

  onPrevious = () =>{
      this.setState(prevState => ({
        errors: {},
        activeTab: prevState.activeTab - 1 
      }));
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

  resetData = () => {
    console.log('resetData')
    this.setState({
      values: {
        username: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        gender: 'male',
        email: "",
        mobile: "",
        country: 1,
        city: 0,
        avatar: ''
      },
      activeTab: 1
    })
  }

  render() {
    // console.log(this);

    return(
      <div className="form-container card">
        <StepItems activeTab={this.state.activeTab}/>
        {this.state.activeTab === 1 && (
          <BasicForm values={this.state.values}
                     errors={this.state.errors}
                     activeTab={this.state.activeTab}
                     onSubmit={this.onSubmit}
                     onPrevious={this.onPrevious}
                     onChange={this.onChange}/> 
        ) }
        {this.state.activeTab === 2 && (
          <ContactsForm values={this.state.values}
                        errors={this.state.errors}
                        onSubmit={this.onSubmit}
                        onChange={this.onChange}
                        onPrevious={this.onPrevious}
                        getOptionsItem={this.getOptionsItem}
                        getOptionsCity={this.getOptionsCity}/>
        ) }
        {this.state.activeTab === 3 && (
          <AvatarForm values={this.state.values}
                      errors={this.state.errors}
                      onSubmit={this.onSubmit}
                      onPrevious={this.onPrevious}
                      onChangeAvatar={this.onChangeAvatar}/>
        )}
        {this.state.activeTab === 4 && (
          <FinishForm values={this.state.values}  
                      resetData={this.resetData}  />
        )}
      </div>
    );
  }
}



