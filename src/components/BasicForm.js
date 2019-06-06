import React, {Component} from 'react' ;
import Field from './Field' ;
import ButtonsForm from './ButtonsForm' ;

export default class BasicForm extends Component {

	
	state= {
		username: '',
    password: '',
    gender: 'male',
		repeatPassword: '',
		lastname: '',
		errors: {
				username: '',
				lastname: '',
				password: '',
				repeatPassword: ''
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
    if( this.state.username.length < 5) {
      errors.username = 'Must be more 5 characters' ; 
		} 

		if( this.state.lastname.length < 5) {
      errors.lastname = 'Must be more 5 characters' ; 
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
	
	
	render() {
			return(
					<form className="form card-body">
							<Field  id="username"
											labelText="Username"
											type="text"
											placeholder="Enter username"
											name="username"
											value={this.state.username}
											onChange={this.onChange}
											error={this.state.errors.username}  />
							<Field  id="lastname"
											labelText="Lastname"
											type="text"
											placeholder="Enter lastname"
											name="lastname"
											value={this.state.lastname}
											onChange={this.onChange}
											error={this.state.errors.lastname}  />
							<Field  id="password"
											labelText="password"
											type="text"
											placeholder="Enter password"
											name="password"
											value={this.state.password}
											onChange={this.onChange}
											error={this.state.errors.password}  />
							<Field  id="repeatPassword"
											labelText="Repeat password"
											type="text"
											placeholder="Repeat password"
											name="repeatPassword"
											value={this.state.repeatPassword}
											onChange={this.onChange}
											error={this.state.errors.repeatPassword}  />
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
															onChange={this.onChange}
															error={this.state.errors.gender}/>
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
							<ButtonsForm onSubmit={this.onSubmit}/>
					</form>
			);
	}
}