// Form validation utilities
export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export function validateBookingForm(formData) {
    const errors = {}

    // Full Name
    if (!formData.fullName || formData.fullName.trim().length < 2) {
        errors.fullName = 'Please enter your full name (minimum 2 characters)'
    }

    // Email
    if (!formData.email) {
        errors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email address'
    }

    // Event Type
    if (!formData.eventType) {
        errors.eventType = 'Please select an event type'
    }

    // City
    if (!formData.city || formData.city.trim().length < 2) {
        errors.city = 'Please enter the city (minimum 2 characters)'
    }

    // Date
    if (!formData.date) {
        errors.date = 'Please select a date'
    } else {
        const selectedDate = new Date(formData.date)
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        if (selectedDate < today) {
            errors.date = 'Date cannot be in the past'
        }
    }

    // Budget Range
    if (!formData.budgetRange) {
        errors.budgetRange = 'Please select a budget range'
    }

    // Message
    if (!formData.message || formData.message.trim().length < 10) {
        errors.message = 'Please provide more details (minimum 10 characters)'
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}
