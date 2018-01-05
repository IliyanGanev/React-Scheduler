const AppointmentsList = ({appointments}) => 
	<div>
		{appointments.map(function(appointment){
			return(
				<Appointment appointment={appointment} key={appointment.id} />
			)
		})}
	</div>



// class AppointmentsList extends React.Component{
// 	render () {
// 		return (
// 			<div>
// 				{this.props.appointments.map(function(appointment){
// 					return(
// 						<Appointment appointment={appointment} key={appointment.id} />
// 					)
// 				})}
// 			</div>
// 		)
// 	}
// }