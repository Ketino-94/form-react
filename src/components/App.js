import React, { Component } from 'react'

import BasicForm from './BasicForm'
import ContactsForm from './ContactsForm'
import AvatarForm from './AvatarForm'
import FinishForm from './FinishForm'
import StepItems from './StepItems'

export default class App extends Component {
	state = {
		activeTab: 1,
		agree: true,
		age: 0,
		values: {
			username: '',
			lastname: '',
			password: '',
			repeatPassword: '',
			gender: 'male',
			email: '',
			mobile: '',
			country: 1,
			city: 0,
			avatar: '',
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
			avatar: '',
		},
	}

	onChange = e => {
		const name = e.target.name
		const value = e.target.value
		this.setState(prevState => ({
			values: {
				...prevState.values,
				[name]: value,
			},
			errors: {
				...prevState.errors,
				[name]: '',
			},
		}))
	}

	onChangeAgree = e => {
		this.setState({
			[e.target.name]: e.target.checked,
		})
	}

	onChangeAvatar = e => {
		const reader = new FileReader()
		reader.onload = e => {
			this.setState(prevState => ({
				values: {
					...prevState.values,
					avatar: e.target.result,
				},
			}))
		}
		reader.readAsDataURL(e.target.files[0])
	}

	validateValues = () => {
		const { values } = this.state
		const errors = {}
		switch (this.state.activeTab) {
			case 1:
				if (values.username.length < 5) {
					errors.username = 'Must be more 5 characters'
				}

				if (values.lastname.length < 5) {
					errors.lastname = 'Must be more 5 characters'
				}

				if (values.password.length < 3) {
					errors.password = 'Must be more 3 characters'
				}

				if (values.password !== values.repeatPassword) {
					errors.repeatPassword = 'Must be equal password'
				}
				break
			case 2:
				const validateEmail = email => {
					let valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					return valid.test(String(email).toLowerCase())
				}

				const validateMobile = mobile => {
					let valid = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
					return valid.test(mobile)
				}

				if (!validateEmail(values.email)) {
					errors.email = 'Enter valid email'
				}
				if (!validateMobile(values.mobile)) {
					errors.mobile = 'Enter valid number'
				}

				if (values.city === 0) {
					errors.city = 'Required'
				}
				break
			case 3:
				if (values.avatar === '') {
					errors.avatar = 'Required'
				}
				break
			default:
				break
		}
		return errors
	}

	onSubmit = () => {
		const errors = this.validateValues()
		if (Object.keys(errors).length > 0) {
			this.setState({
				errors: errors,
			})
		} else {
			this.setState(prevState => ({
				errors: {},
				activeTab: prevState.activeTab + 1,
			}))
		}
	}

	onPrevious = () => {
		this.setState(prevState => ({
			errors: {},
			activeTab: prevState.activeTab - 1,
		}))
	}

	getOptionsItem = items => {
		return items.map(item => (
			<option key={item.id} value={item.id}>
				{item.name}
			</option>
		))
	}

	getOptionsCity = items => {
		let citiesArray = []
		for (let key in items) {
			if (items[key].country === Number(this.state.values.country)) {
				citiesArray.push({ id: key, name: items[key].name })
			}
		}

		return citiesArray.map(item => (
			<option key={item.id} value={item.id}>
				{item.name}
			</option>
		))
	}

	resetData = () => {
		this.setState({
			values: {
				username: '',
				lastname: '',
				password: '',
				repeatPassword: '',
				gender: 'male',
				email: '',
				mobile: '',
				country: 1,
				city: 0,
				avatar: '',
			},
			activeTab: 1,
		})
	}

	render() {
		const { activeTab, values, errors } = this.state
		return (
			<div className="form-container card">
				<StepItems activeTab={activeTab} />
				{activeTab === 1 && (
					<BasicForm
						values={values}
						errors={errors}
						activeTab={activeTab}
						onSubmit={this.onSubmit}
						onPrevious={this.onPrevious}
						onChange={this.onChange}
					/>
				)}
				{activeTab === 2 && (
					<ContactsForm
						values={values}
						errors={errors}
						onSubmit={this.onSubmit}
						onChange={this.onChange}
						onPrevious={this.onPrevious}
						getOptionsItem={this.getOptionsItem}
						getOptionsCity={this.getOptionsCity}
					/>
				)}
				{activeTab === 3 && (
					<AvatarForm
						values={values}
						errors={errors}
						onSubmit={this.onSubmit}
						onPrevious={this.onPrevious}
						onChangeAvatar={this.onChangeAvatar}
					/>
				)}
				{activeTab === 4 && (
					<FinishForm values={values} resetData={this.resetData} />
				)}
			</div>
		)
	}
}
