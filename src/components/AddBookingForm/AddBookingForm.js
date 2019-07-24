import React from "react"
import Loading from "../Loading/Loading"
import FormInput from "../FormInput/FormInput"
import "./AddBookingForm.css"

export default function AddBookingForm({ handleSubmit, handleFields, fields, isLoading }) {
  return (
    <form className="booking-form" onSubmit={e => handleSubmit(e)}>
      <div className="col-1">
        <FormInput
          id="name"
          label="Name"
          type="text"
          value={fields.name || ""}
          name="name"
          handleFields={handleFields}
        />
        <FormInput
          id="email"
          label="Email"
          type="text"
          value={fields.email || ""}
          name="email"
          handleFields={handleFields}
        />
        <FormInput
          id="address"
          label="Address"
          type="text"
          value={fields.address || ""}
          name="address"
          handleFields={handleFields}
        />
        <FormInput
          id="city"
          label="City"
          type="text"
          value={fields.city || ""}
          name="city"
          handleFields={handleFields}
        />
        <div className="state-zip-container">
          <FormInput
            id="state"
            label="State"
            type="text"
            value={fields.state || ""}
            name="state"
            handleFields={handleFields}
          />
          <FormInput
            id="zip"
            label="Zip Code"
            type="text"
            value={fields.zip || ""}
            name="zip"
            handleFields={handleFields}
          />
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
        <FormInput
            id="booking-date"
            label="Booking Date"
            type="date"
            value={fields.bookingdate || ""}
            name="bookingdate"
            handleFields={handleFields}
        />
        <FormInput
            id="booking-time"
            label="Booking Time"
            type="time"
            value={fields.bookingtime || ""}
            name="bookingtime"
            handleFields={handleFields}
        />
        <Loading loading={isLoading} />
      </div>
      <button type="submit" className="create-booking">
        Create booking
      </button>
    </form>
  )
}

AddBookingForm.defaultProps = {
  fields: {
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    bookingtype: "",
    bookingdate: "",
    bookingtime: ""
  }
}