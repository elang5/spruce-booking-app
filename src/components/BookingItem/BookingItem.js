import React from 'react'
import formatDateTime from '../../Utils/Utils'
import './BookingItem.css'

export default function BookingItem({ booking }) {
  return (
    <React.Fragment>
      <div className='booking-item cell customer'>
        {booking.name}
      </div>
      <div className='booking-item cell email'>
        {booking.email}
      </div>
      <div className='booking-item cell address' >
        <div className="street">
          {booking.address}
        </div>
        <div className="city-state-zip">
          {`${booking.city}, ${booking.state}, ${booking.zip}`}
        </div>
      </div> 
      <div className='booking-item cell booking-type'>
        {booking.bookingtype} 
      </div>
      <div className='booking-item cell booking-time'>
        {formatDateTime(booking.datetime)}
      </div>
    </React.Fragment>
  )
}

BookingItem.defaultProps = {
  booking: {
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    bookingtype: '',
    datetime: ''
  }
}