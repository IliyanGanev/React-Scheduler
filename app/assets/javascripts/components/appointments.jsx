class Appointments extends React.Component {
	constructor (props){
		super (props)
		this.state = {
			appointments: this.props.appointments,
			title: 'Standup Meeting',
			appt_time: 'Tomorrow at 9am'
		}
	}

	handleUserInput (obj) {
		this.setState(obj);
	}

	handleFormSubmit () {
	  const appointment = {title: this.state.title, appt_time: this.state.appt_time};
	  	$.post('/appointments',
	  		{appointment: appointment})
	  	.done((data) => {
	  		this.addNewAppointment(data);
	  	});		
	}

	addNewAppointment (appointment) {
		const newState = this.state.appointments.concat(appointment);
	 	this.setState({ appointments: newState.sort(function(a, b){
	 		return new Date(a.appt_time) - new Date(b.appt_time);
	 	}) 
		});
	}


	handleDelete(id) {
		$.ajax({ url: `/appointments/${id}`,
		 type: 'DELETE',
		  success: (response) => { 
		  	this.setState({ appointments: response });
		  } 
		});
	}

	render (){
		return (
			<div>
		    <AppointmentForm title={this.state.title}
          input_appt_time={this.state.appt_time}
          onUserInput={(obj) => this.handleUserInput(obj)}
          onFormSubmit={() => this.handleFormSubmit()} />
        <AppointmentsList handleDelete={(id) => this.handleDelete(id)} appointments={this.state.appointments} />
			</div>
		)
	}
};