import React from "react"
import Loading from "../Loading/Loading"
import "./AddBookingForm.css"

export default function AddBookingForm({ handleSubmit, handleFields, fields, isLoading }) {
  return (
    <form className="booking-form" onSubmit={e => handleSubmit(e)}>
      <div className="col-1">
        <div className="input-cell">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={fields.name || ""} name="name" onChange={handleFields}/>
        </div>
        <div className="input-cell">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={fields.email || ""} name="email" onChange={handleFields}/>
        </div>
        <div className="input-cell">
          <label htmlFor="address">Street Address</label>
          <input id="address" type="text" value={fields.address || ""} name="address" onChange={handleFields}/>
        </div>
        <div className="input-cell">
          <label htmlFor="city">City</label>
          <input id="city" type="text" value={fields.city || ""} name="city" onChange={handleFields}/>
        </div>
        <div className="state-zip-container">
          <div className="input-cell">
            <label htmlFor="state">State</label>
            <input id="state" type="text" value={fields.state || ""} name="state" onChange={handleFields}/>
          </div>
          <div className="input-cell">
            <label htmlFor="zip">Zip Code</label>
            <input id="zip" type="number" value={fields.zip || ""} name="zip" onChange={handleFields}/>
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="input-cell">
          <label htmlFor="booking-type">Booking type</label>
          <select required id="booking-type" value={fields.bookingtype || ""} name="bookingtype" onChange={handleFields}>
            <option value="housekeeping">Housekeeping</option>
            <option value="dogwalk">Dog Walk</option>
          </select>
        </div>
        <div className="input-cell">
          <label htmlFor="booking-date">Booking Date</label>
          <input required type="date" name="bookingdate" id="booking-date" value={fields.bookingdate || ""} onChange={handleFields}/>
        </div>
        <div className="input-cell">
          <label htmlFor="booking-time">Booking Time</label>
          <input required type="time" name="bookingtime" id="booking-time" value={fields.bookingtime || ""} onChange={handleFields}/>
        </div>
      <Loading loading={isLoading} />
      </div>
      <button type="submit" className="create-booking">
        Create booking
      </button>
    </form>
  )
}