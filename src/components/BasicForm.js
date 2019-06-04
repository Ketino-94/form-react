import React, {Component} from 'react' ;
import Field from './Field' ;
import ButtonsForm from './ButtonsForm' ;

export default class BasicForm extends Component {

    
    render() {
        const { onChange, username, password, repeatPassword, lastname, gender} = this.props;

        return(
            <form className="form card-body">
                <Field  id="username"
                        labelText="Username"
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        value={username}
                        onChange={onChange}
                        error={username}  />
                <Field  id="lastname"
                        labelText="Lastname"
                        type="text"
                        placeholder="Enter lastname"
                        name="lastname"
                        value={lastname}
                        onChange={onChange}
                        error={lastname}  />
                <Field  id="password"
                        labelText="password"
                        type="text"
                        placeholder="Enter password"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        error={password}  />
                <Field  id="repeatPassword"
                        labelText="Repeat password"
                        type="text"
                        placeholder="Repeat password"
                        name="repeatPassword"
                        value={repeatPassword}
                        onChange={onChange}
                        error={repeatPassword}  />
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
                                checked={gender === "male"} 
                                onChange={onChange}/>
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
                                checked={gender === "female"} 
                                onChange={onChange} />
                        <label className="form-check-label" htmlFor="female">
                            Female
                        </label>
                        </div>
                    </div>
                    </div>
                </fieldset>
                <ButtonsForm/>
            </form>
        );
    }
}