// var Appointment = createReactClass({});
class Appointment extends React.Component {

		// handleDelete () {
		// 	 this.props.handleDelete();
		// }

  render () {
		return (
			<div className='appointment'>
				<h3>{this.props.appointment.title}</h3>
				<p>{formatDate(this.props.appointment.appt_time)}</p>
					<input onClick={() => this.props.handleDelete()} type='submit' value='Delete' className='delete-button' />
			</div>
		)
	}
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


// const Appointment = ({appointment}) => {
// 	return (
// 		<div className='appointment'>
// 			<h3>{appointment.title}</h3>
// 			<p>{formatDate(appointment.appt_time)}</p>
// 		</div>
// 	)
// }