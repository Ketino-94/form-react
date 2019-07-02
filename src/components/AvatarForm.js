import React, { Component } from 'react'
import DefaultAvatar from '../img/default-avatar.png'
import ButtonsForm from './ButtonsForm'

export default class AvatarForm extends Component {
	render() {
		const { values, errors, onSubmit, onChangeAvatar, onPrevious } = this.props
		return (
			<form className="form card-body">
				<img
					className="mb-4"
					width="100%"
					src={values.avatar.length ? values.avatar : DefaultAvatar}
					alt="avatar"
				/>
				<div className="custom-file mb-4" >
					<input
						type="file"
						className="custom-file-input"
						name="avatar"
						id="avatar"
						onChange={onChangeAvatar}
					/>
					<label className="custom-file-label" htmlFor="avatar">
						Choose avatar
					</label>
					{errors.avatar ? (
						<div className="invalid-feedback">{errors.avatar}</div>
					) : null}
				</div>
				<ButtonsForm onSubmit={onSubmit} onPrevious={onPrevious} />
			</form>
		)
	}
}
