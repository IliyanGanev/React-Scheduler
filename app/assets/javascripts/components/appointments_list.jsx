// const AppointmentsList = ({appointments}) => 
// 	<div>
// 		{appointments.map(function(appointment){
// 			return(
// 				<Appointment appointment={appointment} key={appointment.id} />
// 			)
// 		})}
// 	</div>


class AppointmentsList extends React.Component{
	
   handleDelete(id) {
      this.props.handleDelete(id);
    }

    onUpdate(editedAppointment) {
    	this.props.onUpdate(editedAppointment); 
    }

	render () {
		
		return (
			<div>
				{this.props.appointments.map((appointment) => {
					return(
						<Appointment appointment={appointment}
												 key={appointment.id}
												 handleDelete={() => this.handleDelete(appointment.id)}
						 						 handleUpdate={(editedAppointment) => this.onUpdate(editedAppointment)} />
					// <Appointment handleDelete={this.handleDelete.bind(this, appointment.id)} appointment={appointment} key={appointment.id} />
					)
				})}
			</div>
		)
	}
}	