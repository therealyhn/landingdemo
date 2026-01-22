// Generate .ics calendar file for booking hold
export function generateCalendarFile(bookingData) {
    const { fullName, email, eventType, city, venue, date, budgetRange, message } = bookingData

    // Parse date and set time to 22:00 (10 PM)
    const eventDate = new Date(date)
    eventDate.setHours(22, 0, 0, 0)

    // Calculate end time (4 hours later)
    const endDate = new Date(eventDate)
    endDate.setHours(eventDate.getHours() + 4)

    // Format dates for iCal (YYYYMMDDTHHMMSS)
    const formatDate = (d) => {
        const year = d.getFullYear()
        const month = String(d.getMonth() + 1).padStart(2, '0')
        const day = String(d.getDate()).padStart(2, '0')
        const hours = String(d.getHours()).padStart(2, '0')
        const minutes = String(d.getMinutes()).padStart(2, '0')
        const seconds = String(d.getSeconds()).padStart(2, '0')
        return `${year}${month}${day}T${hours}${minutes}${seconds}`
    }

    const startDateTime = formatDate(eventDate)
    const endDateTime = formatDate(endDate)
    const now = formatDate(new Date())

    // Build description
    const description = `
Booking Hold for NOVA (Demo DJ)

Contact: ${fullName}
Email: ${email}
Event Type: ${eventType}
Budget Range: ${budgetRange}

Message:
${message}

This is a calendar hold. Please confirm booking details via email.
  `.trim().replace(/\n/g, '\\n')

    // Build iCal content
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//NOVA DJ Demo//Booking Hold//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
DTSTART:${startDateTime}
DTEND:${endDateTime}
DTSTAMP:${now}
UID:${Date.now()}@novadj-demo.com
SUMMARY:HOLD — NOVA (Demo DJ) booking
DESCRIPTION:${description}
LOCATION:${city}${venue ? ` - ${venue}` : ''}
STATUS:TENTATIVE
SEQUENCE:0
END:VEVENT
END:VCALENDAR`

    return icsContent
}

// Download .ics file
export function downloadCalendarFile(bookingData) {
    const icsContent = generateCalendarFile(bookingData)
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `NOVA-booking-hold-${bookingData.date}.ics`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(link.href)
}
