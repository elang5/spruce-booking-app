import React, { Component } from "react"
import Modal from "react-modal"
import AddBookingForm from "../AddBookingForm/AddBookingForm"
import BookingService from "../../services/booking-service"
import "./AddBookingModal.css"

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

export class AddBookingModal extends Component {
  state = {
    error: null,
    bookingtype: "housekeeping",
    isLoading: false
  }

  handleFields = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { name, email, address, city, state, zip, bookingtype, bookingdate, bookingtime } = this.state
    try {
      this.setState({ isLoading: true })
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
      await BookingService.postBooking(newBooking)
      const updatedBookings = await BookingService.getBookings()
      this.props.updateBookings(updatedBookings)
      this.props.closeModal()
      this.setState({ isLoading: false })
    } catch(err) {
      this.setState({ error: err.message, isLoading: false })
    }
  }

  render() {
    const { isLoading, error } = this.state
    return (
      <Modal
        className="booking-form-modal"
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel={"Create booking"}
        closeTimeoutMS={100}
      >
        <h1>Create booking</h1>
        {error && <p className="error">{error}</p>}
        <AddBookingForm
          fields={{...this.state}}
          handleSubmit={this.handleSubmit}
          handleFields={this.handleFields}
          isLoading={isLoading}
        />
      </Modal>
    )
  }
}

export default AddBookingModal
