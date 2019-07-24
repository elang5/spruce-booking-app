import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'
import BookingList from '../BookingList/BookingList'
import AddBookingModal from '../AddBookingModal/AddBookingModal'
import BookingService from '../../services/booking-service'
import './App.css';

class App extends Component {
  state = {
    bookingList: [],
    filteredBookings: [],
    filterOption: 'all',
    modalIsOpen: false,
  }

  async componentDidMount() {
    const bookings = await BookingService.getBookings()
    this.setState({ bookingList: bookings })
  } 

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  handleFilterOptionChange = e => {
    const { value } = e.target
    this.setState({ filterOption: value })
    if (value === 'housekeeping') {
      let filteredBookings = this.state.bookingList
      filteredBookings = filteredBookings.filter(booking => booking.bookingtype === 'housekeeping')
      this.setState({ filteredBookings })
    }
    if (value === 'dogwalk') {
      let filteredBookings = this.state.bookingList
      filteredBookings =  filteredBookings.filter(booking => booking.bookingtype === 'dogwalk')
      this.setState({ filteredBookings })
      return
    }

  }

  render() {
    const { bookingList, modalIsOpen, filterOption, filteredBookings } = this.state
    return (
      <div className="App">
        <NavBar />
        <Header 
          handleClick={this.openModal}
          handleFilter={this.handleFilterOptionChange}/>
        <BookingList bookingList={filterOption !== 'all' ? filteredBookings : bookingList} />
        <AddBookingModal 
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
        />
      </div>
    );
  }
}

export default App;
