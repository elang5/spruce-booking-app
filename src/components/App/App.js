import React, { Component } from "react";
import NavBar from "../NavBar/NavBar"
import Header from "../Header/Header"
import BookingList from "../BookingList/BookingList"
import AddBookingModal from "../AddBookingModal/AddBookingModal"
import BookingService from "../../services/booking-service"
import Loading from "../Loading/Loading"
import "./App.css";

class App extends Component {
  state = {
    bookingList: [],
    filteredBookings: [],
    filterOption: "all",
    modalIsOpen: false,
    isLoading: false
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    const bookings = await BookingService.getBookings()
    this.setState({ bookingList: bookings, isLoading: false })
  } 

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  updateBookings = (updatedBookings) => {
    this.setState({ bookingList: updatedBookings })
  }

  handleFilterOptionChange = e => {
    const { value } = e.target
    this.setState({ filterOption: value })
    if (value === "housekeeping") {
      let filteredBookings = this.state.bookingList
      filteredBookings = filteredBookings.filter(booking => booking.bookingtype === "housekeeping")
      this.setState({ filteredBookings })
    }
    if (value === "dogwalk") {
      let filteredBookings = this.state.bookingList
      filteredBookings =  filteredBookings.filter(booking => booking.bookingtype === "dogwalk")
      this.setState({ filteredBookings })
      return
    }

  }

  render() {
    const { bookingList, modalIsOpen, filterOption, filteredBookings, isLoading } = this.state
    return (
      <div className="App">
        <NavBar />
        <Header 
          handleClick={this.openModal}
          handleFilter={this.handleFilterOptionChange}/>
        <BookingList bookingList={filterOption !== "all" ? filteredBookings : bookingList} />
        <Loading loading={isLoading} />
        <AddBookingModal 
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          updateBookings={this.updateBookings}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

export default App;
