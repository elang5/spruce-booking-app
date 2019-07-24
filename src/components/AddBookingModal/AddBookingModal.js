import React, { Component } from 'react'
import Modal from 'react-modal'
import AddBookingForm from '../AddBookingForm/AddBookingForm'
import BookingService from '../../services/booking-service'
import moment from 'moment'
import './AddBookingModal.css'

Modal.setAppElement('#root')

export class AddBookingModal extends Component {
  state = {
    error: null,
    bookingtype: 'housekeeping',
    isEditing: true
  }

  componentDidMount() {
    this.setState({ isEditing: true })
  }

  handleFields = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { name, email, address, city, state, zip, bookingtype, bookingdate, bookingtime } = this.state
    let date = new Date(`${bookingdate}T${bookingtime}:00`)
    let datetime = date.toISOString()
    const newBooking = {
      name, 
      email,
      address,
      city,
      state,
      zip,
      bookingtype,
      datetime
    }
    try {
      await BookingService.postBooking(newBooking)
      this.setState({ isEditing: false })
    } catch(err) {
      this.setState({ error: err.error })
    }
  }

  render() {
    return (
      <Modal
        className="booking-form-modal"
        isOpen={!this.state.isEditing ? false : this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel={'Create booking'}
        closeTimeoutMS={100}
      >
        <h1>Create booking</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <AddBookingForm
          fields={{...this.state}}
          handleSubmit={this.handleSubmit}
          handleFields={this.handleFields}
        />
      </Modal>
    )
  }
}

export default AddBookingModal
