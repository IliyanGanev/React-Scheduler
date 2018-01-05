const Appointment = ({appointment}) => {
	return (
		<div className='appointment'>
			<h3>{appointment.title}</h3>
			<p>{formatDate(appointment.appt_time)}</p>
		</div>
	)
}




// class Appointment extends React.Component {
// 	render (){
// 		return (
// 			<div className='appointment'>
// 				<h3>{this.props.appointment.title}</h3>
// 				<p>{formatDate(this.props.appointment.appt_time)}</p>
// 			</div>
// 		)
// 	}
// }