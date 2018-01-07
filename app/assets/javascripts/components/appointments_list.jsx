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

	render () {
		
		return (
			<div>
				{this.props.appointments.map((appointment) => {
					return(
						<Appointment handleDelete={() => this.handleDelete(appointment.id)} appointment={appointment} key={appointment.id} />
					// <Appointment handleDelete={this.handleDelete.bind(this, appointment.id)} appointment={appointment} key={appointment.id} />
					)
				})}
			</div>
		)
	}
}	