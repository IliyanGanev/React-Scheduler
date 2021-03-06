class AppointmentForm extends React.Component {
  handleChange (e) {
    const name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  setApptTime (e) {
    const name = 'appt_time';
    const obj = {};
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  }

  render () {
    const inputProps = {
      name: 'appt_time'
    };
    return (
      <div className='newappointmentdiv'>
        <form autoComplete="on" onSubmit={(event) => this.handleSubmit(event)}>
          <input size="40" name='title' placeholder='Appointment Title'
            value={this.props.title}
            onChange={(event) => this.handleChange(event)} />

            <Datetime input={false} open={true} inputProps={inputProps} 
            value={this.props.appt_time}
            onChange={(event) => this.setApptTime(event)} 
             />
            <input type='submit' value='Make Appointment' className='submit-button' />        
        </form>
      </div>
    )
  }
};
