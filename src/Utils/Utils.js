export function formatDateTime(dateTime) {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }
  let date = new Date(dateTime)
  return date.toLocaleString("en-US", options)
}

export function formatBookingType(bookingType) {
  if (bookingType === "housekeeping") {
    return "Housekeeping"
  }
  return "Dog Walk"
}