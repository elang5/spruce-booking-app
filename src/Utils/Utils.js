export default function formatDateTime(datetime) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  let date = new Date(datetime)
  return date.toLocaleString('en-US', options)
}