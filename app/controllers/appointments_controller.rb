class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order('appt_time ASC')
    @appointment = Appointment.new
  end

  def create
    @appointment = Appointment.new(appointment_params)
    if @appointment.save
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  def destroy
   @appointment = Appointment.find(params[:id])
    if @appointment.destroy 
      @appointments = Appointment.order('appt_time ASC')
      render json: @appointments
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  def update
    appointment = Appointment.find(params[:id])
    title = params[:editedAppointment][:title]
    date = params[:editedAppointment][:appt_time] 
    if appointment.update_attributes(title: title, appt_time: date)
      render json: appointment
    else
      render json: appointment.errors, status: :unprocessable_entity
    end
  end


  private
  def appointment_params
    params.require(:appointment).permit(:title, :appt_time)
  end
end
