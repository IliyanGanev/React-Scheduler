var Appointments = createReactClass({
	getInitialState: function() {
		return {
			appointments: this.props.appointments,
			title: 'Standup Meeting',
			appt_time: 'Tomorrow at 9am'
		}
	},

	handleUserInput: function(obj) {
		this.setState(obj);
	},

	handleFormSubmit: function() {
	  var appointment = {title: this.state.title, appt_time: this.state.appt_time};

			
	},

	render: function(){
		return (
			<div>
		    <AppointmentForm input_title={this.state.title}
          input_appt_time={this.state.appt_time}
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit} />
        <AppointmentsList appointments={this.state.appointments} />
			</div>
		)
	}
});