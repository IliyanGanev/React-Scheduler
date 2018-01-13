// var Appointment = createReactClass({});
class Appointment extends React.Component {

		// handleDelete () {
		// 	 this.props.handleDelete();
		// }
	
	constructor(props) {
    super(props);
    this.state = {
      editable: false,
      time: null
    };
  }

	handleEdit() {
	 if(this.state.editable){
	 	const title = this.titleInput.value;
	 	const time = this.state.time;
	 	const id = this.props.appointment.id;
	 	const editedAppointment = {id: id, title: title, appt_time: time}
	 	console.log(this.state.editable, title, time, editedAppointment)
	  }
	  this.setState({editable: !this.state.editable})
	}

	setApptTime (e) {
    const name = 'appt_time';
    const obj = {};
    if(obj[name] = e.toDate()) {
    	console.log(obj)
    	this.setState({time: obj})
      // this.props.onUserInput(obj);
    }
  }

  render () {
  	const title = this.state.editable ? <input type='text' ref={input => { this.titleInput = input;}} defaultValue={this.props.appointment.title} /> : <h3>{this.props.appointment.title}</h3>;
		const time = this.state.editable ? <Datetime input={false} ref={input => { this.timeInput = input;}} open={true} defaultvalue={this.props.appointment.appt_time} onChange={(event) => this.setApptTime(event)} /> : <p>{formatDate(this.props.appointment.appt_time)}</p>;
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