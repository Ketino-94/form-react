import React, {Component} from 'react' ;
import Field from './Field' ;
import ButtonsForm from './ButtonsForm' ;

export default class BasicForm extends Component {	
	
	render() { 
			const {onSubmit, values, errors, onChange,  activeTab} = this.props;
			return(
					<form className="form card-body">
							<Field  id="username"
											labelText="Username"
											type="text"
											placeholder="Enter username"
											name="username"
											value={values.username}
											onChange={onChange}
											error={errors.username} />
							<Field  id="lastname"
											labelText="Lastname"
											type="text"
											placeholder="Enter lastname"
											name="lastname"
											value={values.lastname}
											onChange={onChange}
											error={errors.lastname}  />
							<Field  id="password"
											labelText="password"
											type="text"
											placeholder="Enter password"
											name="password"
											value={values.password}
											onChange={onChange}
											error={errors.password}  />
							<Field  id="repeatPassword"
											labelText="Repeat password"
											type="text"
											placeholder="Repeat password"
											name="repeatPassword"
											value={values.repeatPassword}
											onChange={onChange}
											error={errors.repeatPassword}  />
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
															checked={values.gender === "male"} 
															onChange={onChange}
															error={errors.gender}/>
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
															checked={values.gender === "female"} 
															onChange={onChange} />
											<label className="form-check-label" htmlFor="female">
													Female
											</label>
											</div>
									</div>
									</div>
							</fieldset>
							<ButtonsForm onSubmit={onSubmit} disabled={activeTab} />
					</form>
			);
	}
}