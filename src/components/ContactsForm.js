import React, {Component} from 'react';

import Field from './Field' ;
import countries from "../data/countries"; 
import cities from "../data/cities"; 
import ButtonsForm from './ButtonsForm' ;


export default class ContactsForm extends Component {

    getOptionsItem = (items) => {
        return items.map(item => (
        <option key={item.id} value={item.id}>{item.name}</option>
        ));
    }

    render() {
        const {email, mobile, onChange, country, city} = this.props;
        return(
            <form className="form card-body">
                <Field  id="email"
                        labelText="Email"
                        type="text"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        error={email}  />
                <Field  id="mobile"
                        labelText="Mobile"
                        type="tel"
                        placeholder="Enter mobile"
                        name="mobile"
                        value={mobile}
                        onChange={onChange}
                        error={mobile}  />
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select className="form-control" id="country"
                            name="country"
                            value={country}
                            onChange={onChange}>
                            {this.getOptionsItem(countries)}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <select className="form-control" id="city"
                            name="city"
                            value={city}
                            onChange={onChange}>
                            {this.getOptionsItem(countries)}
                    </select>
                </div>
                <ButtonsForm/>
            </form>
        );
    }
}