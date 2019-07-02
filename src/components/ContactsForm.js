import React, { Component } from 'react'

import Field from './Field'
import countries from '../data/countries'
import cities from '../data/cities'
import ButtonsForm from './ButtonsForm'

export default class ContactsForm extends Component {
	render() {
		const {
			onSubmit,
			values,
			errors,
			onChange,
			getOptionsItem,
			getOptionsCity,
			onPrevious,
		} = this.props
		return (
			<form className="form card-body">
				<Field
					id="email"
					labelText="Email"
					type="email"
					placeholder="Enter email"
					name="email"
					value={values.email}
					onChange={onChange}
					error={errors.email}
				/>
				<Field
					id="mobile"
					labelText="Mobile"
					type="tel"
					placeholder="Enter mobile"
					name="mobile"
					value={values.mobile}
					onChange={onChange}
					error={errors.mobile}
				/>
				<div className="form-group">
					<label htmlFor="country">Country</label>
					<select
						className="form-control"
						id="country"
						name="country"
						value={values.country}
						onChange={onChange}
					>
						{getOptionsItem(countries)}
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="city">City</label>
					<select
						className="form-control"
						id="city"
						name="city"
						value={values.city}
						onChange={onChange}
					>
						<option value="">Select city</option>
						{getOptionsCity(cities)}
					</select>
					{errors.city ? (
						<div className="invalid-feedback">{errors.city}</div>
					) : null}
				</div>
				<ButtonsForm onSubmit={onSubmit} onPrevious={onPrevious} />
			</form>
		)
	}
}
