// var Appointment = createReactClass({});
class Appointment extends React.Component {

		// handleDelete () {
		// 	 this.props.handleDelete();
		// }
	
	constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
  }

	handleEdit() {
	 this.setState({editable: !this.state.editable})
	 console.log(this.state.editable)
	  }

  render () {
  	const title = this.state.editable ? <input type='text' defaultValue={this.props.appointment.title} /> : <h3>{this.props.appointment.title}</h3>;
		const time = this.state.editable ? <Datetime input={false} open={true} value={this.props.appointment.appt_time} /> : <p>{formatDate(this.props.appointment.appt_time)}</p>;
		const editbutton = this.state.editable ? <input onClick={() => this.handleEdit()} type='submit' value='Submit' className='edit-button' /> : <input onClick={() => this.handleEdit()} type='submit' value='Edit' className='edit-button' /> 
		return (
			<div className='appointment'>
				{title}
				{time}
					<input onClick={() => this.props.handleDelete()} type='submit' value='Delete' className='delete-button' />
					{editbutton}
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