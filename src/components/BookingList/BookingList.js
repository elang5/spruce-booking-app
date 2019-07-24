import React, { Component } from 'react'
import BookingListItem from '../BookingItem/BookingItem'
import './BookingList.css'

export default class BookingListPage extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 1,
      bookingsPerPage: 20
    }
  }

  handleClick = e => {
    this.setState({ currentPage: parseInt(e.target.id) })
  }

  renderBookingList = bookings => {
    return bookings.map((booking, index) => 
      <BookingListItem booking={booking} key={index}/>)
  }

  renderPageNumbers = pageNumbers => {
    const { currentPage } = this.state
    return pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className={currentPage === number ? 'page-number active' : 'page-number'}
        >
          {number}
        </li>)
    })
  }

  render() {
    const { currentPage, bookingsPerPage } = this.state
    const { bookingList } = this.props

    const lastBookingIndex = currentPage * bookingsPerPage
    const firstBookingIndex = lastBookingIndex - bookingsPerPage
    const currentBookings = bookingList.slice(firstBookingIndex, lastBookingIndex)

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(bookingList.length / bookingsPerPage); i++) {
      pageNumbers.push(i)
    }

    return (
      <main className="booking-list-container">
        <ul className="page-numbers">
          {this.renderPageNumbers(pageNumbers)}
        </ul>
        <ul className="booking-list">
          {this.renderBookingList(currentBookings)}
        </ul>
      </main>
    )
  }
}
