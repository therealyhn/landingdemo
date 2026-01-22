// Send booking email via Web3Forms API
export async function sendBookingEmail(bookingData) {
    const { fullName, email, instagram, eventType, city, venue, date, budgetRange, message } = bookingData

    // Format the email body
    const emailBody = `
BOOKING INQUIRY FROM ${fullName.toUpperCase()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${fullName}
Email: ${email}
${instagram ? `Instagram: @${instagram}` : 'Instagram: Not provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EVENT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Event Type: ${eventType}
Date: ${date}
Location: ${city}${venue ? ` - ${venue}` : ''}
Budget Range: ${budgetRange}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLIENT MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This booking inquiry was submitted via the NOVA DJ Demo website.
Please respond to ${email} to confirm availability.
  `.trim()

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your actual key from https://web3forms.com
                subject: `🎵 Booking Inquiry: ${eventType} on ${date}`,
                from_name: fullName,
                from_email: email,
                to_email: 'booking@novadj-demo.com', // Replace with DJ's actual email
                message: emailBody,
                // Additional fields for Web3Forms dashboard
                'Event Type': eventType,
                'Event Date': date,
                'Location': `${city}${venue ? ` - ${venue}` : ''}`,
                'Budget Range': budgetRange,
                'Instagram': instagram || 'Not provided'
            })
        })

        const result = await response.json()

        if (result.success) {
            return { success: true, message: 'Email sent successfully!' }
        } else {
            throw new Error(result.message || 'Failed to send email')
        }
    } catch (error) {
        console.error('Email send error:', error)
        return {
            success: false,
            message: 'Failed to send email. Please try again or contact us directly.'
        }
    }
}
