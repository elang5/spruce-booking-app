import React from 'react'
import BookingSpan from '../BookingSpan/BookingSpan'

export default function BookingListItem({ booking }) {
  return (
    <li className="booking-item">
      <BookingSpan 
        className='customer'
        type={booking.name} />
      <BookingSpan 
        className='email'
        type={booking.email} />
      <BookingSpan 
        className='address' 
        type={`${booking.address} ${booking.city}, ${booking.state}, ${booking.zip}`} />
      <BookingSpan 
        className='booking-type'
        type={booking.bookingtype} />
      <BookingSpan 
        className='booking-time'
        type={booking.datetime} />
    </li>
  )
}
