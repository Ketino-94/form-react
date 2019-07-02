import React, { Component } from 'react'

export default class StepItems extends Component {
	state = {
		tabs: [
			{
				tab: 1,
				value: 'Basic',
			},
			{
				tab: 2,
				value: 'Contacts',
			},
			{
				tab: 3,
				value: 'Avatar',
			},
			{
				tab: 4,
				value: 'Finish',
			},
		],
	}

	render() {
		const { tabs } = this.state
		const { activeTab } = this.props
		return (
			<div className="steps mb-1 mt-3">
				{tabs.map(item => {
					return (
						<div
							key={item.tab}
							className={`step ${
								activeTab === item.tab ? 'is-active' : 'is-completed'
							}`}
						>
							<div className="step__marker">{item.tab}</div>
							<div className="step__title mt-1">{item.value}</div>
						</div>
					)
				})}
			</div>
		)
	}
}
