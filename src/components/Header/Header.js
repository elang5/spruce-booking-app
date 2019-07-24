import React from 'react'

export default function Header(props) {
  return (
    <header role="banner">
      <h1>
        Bookings
      </h1>
      <button 
        className="create-booking"
        onClick={props.handleClick}>
        Create booking
      </button>
      <select name="filter-options" id="filter" value={props.filterOption} onChange={e => props.handleFilter(e)}>
        <option value="all">All</option>
        <option value="housekeeping">Housekeeping</option>
        <option value="dogwalk">Dog Walk</option>
      </select>
    </header>
  )
}
