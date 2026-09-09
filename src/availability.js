export function formatAvailability(capacity, attendees, eventDate, today = new Date()) {
  if (eventDate) {
    const startOfToday = new Date(today)
    startOfToday.setHours(0, 0, 0, 0)

    if (new Date(`${eventDate}T00:00:00`) < startOfToday) {
      return '終了'
    }
  }

  const remainingSeats = Math.max(capacity - attendees, 0)

  if (remainingSeats === 0) {
    return '満席'
  }

  if (remainingSeats <= 3) {
    return `残席わずか（残り ${remainingSeats} 席）`
  }

  return `残り ${remainingSeats} 席`
}
