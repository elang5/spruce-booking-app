import config from "../config"
import axios from "axios"

export default {
  async getBookings() {
    // added sort query paramater for ascending date order 
    const results = await axios(`${config.API_ENDPOINT}?q={}&h={"$orderby": {"datetime": 1}}`)
    const bookings = results.data
    return bookings
  },

  async postBooking(newBooking) {
    try {
      const bookings = await axios.post(`${config.API_ENDPOINT}`, newBooking, {
        headers: {
          "Authorization": `Basic ${config.API_KEY}`
        }
      })
      return await bookings.json()
    } catch(err) {
      return err
    }
  }
}