require("dotenv").config()

export default {
  API_KEY: process.env.REACT_APP_API_KEY,
  API_ENDPOINT: "http://localhost:8080/api/bookings"
}

// https://bookingapi-b86e.restdb.io/rest/bookings