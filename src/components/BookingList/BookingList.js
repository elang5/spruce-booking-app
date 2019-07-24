import React, { Component } from 'react'
import BookingListItem from '../BookingItem/BookingItem'

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
    return pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      )
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
      <>
        <ul className="page-numbers">
          {this.renderPageNumbers(pageNumbers)}
        </ul>
        <ul>
          {this.renderBookingList(currentBookings)}
        </ul>
      </>
    )
  }
}
