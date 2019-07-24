import config from '../config'
import axios from 'axios'

export default {
  async getBookings() {
    // added sort query paramater for ascending date order 
    const results = await axios(`${config.API_ENDPOINT}?q={}&h={"$orderby": {"datetime": 1}}`, {
      headers: {
        'x-apikey': `${config.API_KEY}`
      }
    })
    const bookings = results.data
    return bookings
  },

  async postBooking(newBooking) {
    try {
      const bookings = await axios.post(`${config.API_ENDPOINT}`, newBooking, {
        headers: {
          'x-apikey': '5d03eb2a27bc5b75bfeb7c7a'
        }
      })
      return await bookings.json()
    } catch(err) {
      return err
    }
  }
}