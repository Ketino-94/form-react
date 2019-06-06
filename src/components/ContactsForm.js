import React, {Component} from 'react';

import Field from './Field' ;
import countries from "../data/countries"; 
import cities from "../data/cities"; 
import ButtonsForm from './ButtonsForm' ;


export default class ContactsForm extends Component {

    state = {
        email: '', 
        mobile: '' , 
        onChange: '', 
        country: '1', 
        city: '',
        errors: {
            email: '', 
            mobile: ''
        }
    }

    getOptionsItem = (items) => {
        return items.map(item => (
        <option key={item.id} value={item.id}>{item.name}</option>
        ));
    }

    getOptionsCity = (items) => {
        for (let key in items){
          // console.log(items[id]);
          // for (var idee in items[id]){
          //   // return <option key={item.id} value={item.id}>{item.name}</option>
            if( items[key].country ===  Number(this.state.country)) {
              console.log(items[key].name)
              return <option key={items[key]} value={items[key]}>{items[key].name}</option>
            }
          // }
        }
    }
    
    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.username.value , this.password.value);
        const errors = {}; 
        const validateEmail = email => {
          let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return valid.test(String(email).toLowerCase());
        };

        const validateMobile = mobile => {
          let valid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
          return valid.test(mobile);
        };

        if (!validateEmail(this.state.email)) {
          errors.email = "Enter valid email";
        }
        if (!validateMobile(this.state.mobile)) {
          errors.mobile = "Enter valid number";
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

    render() {
        return(
            <form className="form card-body">
                <Field  id="email"
                        labelText="Email"
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={this.state.errors.email}  />
                <Field  id="mobile"
                        labelText="Mobile"
                        type="tel"
                        placeholder="Enter mobile"
                        name="mobile"
                        value={this.state.mobile}
                        onChange={this.onChange}
                        error={this.state.errors.mobile}  />
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select className="form-control" id="country"
                            name="country"
                            value={this.state.country}
                            onChange={this.onChange}>
                            {this.getOptionsItem(countries)}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <select className="form-control" id="city"
                            name="city"
                            value={this.state.city}
                            onChange={this.onChange}>
                            {this.getOptionsCity(cities)}
                    </select>
                </div>
                <ButtonsForm onSubmit={this.onSubmit}/>
            </form>
        );
    }
}