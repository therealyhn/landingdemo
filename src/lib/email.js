// Generate mailto link for booking email
export function generateBookingEmail(bookingData) {
    const { fullName, email, instagram, eventType, city, venue, date, budgetRange, message } = bookingData

    const subject = `Booking Inquiry: NOVA - ${eventType} on ${date}`

    const body = `
Hi NOVA,

I would like to inquire about booking you for an upcoming event.

BOOKING DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${fullName}
Email: ${email}
${instagram ? `Instagram: @${instagram}` : ''}

Event Type: ${eventType}
Date: ${date}
Location: ${city}${venue ? ` - ${venue}` : ''}
Budget Range: ${budgetRange}

MESSAGE:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Looking forward to hearing from you!

Best regards,
${fullName}
  `.trim()

    // Encode for mailto
    const mailtoLink = `mailto:booking@novadj-demo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    return mailtoLink
}

// Open email client with booking details
export function openBookingEmail(bookingData) {
    const mailtoLink = generateBookingEmail(bookingData)
    window.location.href = mailtoLink
}
