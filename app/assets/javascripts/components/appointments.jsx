var Appointments = createReactClass({
	getInitialState: function() {
		return {
			appointments: this.props.appointments,
			input_title: 'Standup Meeting',
			input_appt_time: 'Tomorrow at 9am'
		}
	},

	handleUserInput: function(obj) {
		this.setState(obj);
	},

	render: function(){
		return (
			<div>
				<AppointmentForm input_title={this.state.input_title}  
					input_appt_time={this.state.input_appt_time}
					onUserInput={this.handleUserInput} />
				<AppointmentsList appointments={this.state.appointments}/>
			</div>
		)
	}
});