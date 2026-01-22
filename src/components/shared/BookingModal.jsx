import { useState } from 'react'
import Modal from '../ui/Modal'
import Input from '../ui/Input'
import Textarea from '../ui/Textarea'
import Select from '../ui/Select'
import Button from '../ui/Button'
import { validateBookingForm } from '../../lib/validation'
import { downloadCalendarFile } from '../../lib/calendar'
import { openBookingEmail } from '../../lib/email'

function BookingModal({ isOpen, onClose }) {
    const [step, setStep] = useState('form') // 'form' or 'success'
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        instagram: '',
        eventType: '',
        city: '',
        venue: '',
        date: '',
        budgetRange: '',
        message: '',
    })

    const eventTypes = [
        { value: 'club', label: 'Club Night' },
        { value: 'festival', label: 'Festival' },
        { value: 'private', label: 'Private Event' },
        { value: 'corporate', label: 'Corporate Event' },
        { value: 'wedding', label: 'Wedding' },
        { value: 'other', label: 'Other' },
    ]

    const budgetRanges = [
        { value: '1000-2500', label: '$1,000 - $2,500' },
        { value: '2500-5000', label: '$2,500 - $5,000' },
        { value: '5000-10000', label: '$5,000 - $10,000' },
        { value: '10000+', label: '$10,000+' },
        { value: 'discuss', label: 'Prefer to discuss' },
    ]

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
        // Clear error for this field when user starts typing
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: '' }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const validation = validateBookingForm(formData)

        if (!validation.isValid) {
            setErrors(validation.errors)
            return
        }

        // Form is valid, move to success step
        setStep('success')
    }

    const handleAddCalendar = () => {
        downloadCalendarFile(formData)
    }

    const handleSendEmail = () => {
        openBookingEmail(formData)
    }

    const handleDownloadMediaKit = () => {
        // Placeholder - would link to actual media kit PDF
        alert('Media kit download would trigger here')
    }

    const handleClose = () => {
        // Reset form when closing
        setStep('form')
        setFormData({
            fullName: '',
            email: '',
            instagram: '',
            eventType: '',
            city: '',
            venue: '',
            date: '',
            budgetRange: '',
            message: '',
        })
        setErrors({})
        onClose()
    }

    // Get minimum date (today)
    const today = new Date().toISOString().split('T')[0]

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            title={step === 'form' ? 'Book NOVA' : 'Booking Request Submitted'}
            size={step === 'form' ? 'lg' : 'md'}
        >
            {step === 'form' ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h3 className="text-h3 font-display text-text">Contact Information</h3>

                        <Input
                            id="fullName"
                            label="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            error={errors.fullName}
                        />

                        <Input
                            id="email"
                            type="email"
                            label="Email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            error={errors.email}
                        />

                        <Input
                            id="instagram"
                            label="Instagram Handle"
                            value={formData.instagram}
                            onChange={handleChange}
                            placeholder="johndoe (optional)"
                        />
                    </div>

                    {/* Event Details */}
                    <div className="space-y-4">
                        <h3 className="text-h3 font-display text-text">Event Details</h3>

                        <Select
                            id="eventType"
                            label="Event Type"
                            value={formData.eventType}
                            onChange={handleChange}
                            options={eventTypes}
                            required
                            error={errors.eventType}
                        />

                        <Input
                            id="city"
                            label="City"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Los Angeles"
                            required
                            error={errors.city}
                        />

                        <Input
                            id="venue"
                            label="Venue Name"
                            value={formData.venue}
                            onChange={handleChange}
                            placeholder="Club XYZ (optional)"
                        />

                        <Input
                            id="date"
                            type="date"
                            label="Event Date"
                            value={formData.date}
                            onChange={handleChange}
                            min={today}
                            required
                            error={errors.date}
                        />

                        <Select
                            id="budgetRange"
                            label="Budget Range"
                            value={formData.budgetRange}
                            onChange={handleChange}
                            options={budgetRanges}
                            required
                            error={errors.budgetRange}
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <Textarea
                            id="message"
                            label="Message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us more about your event, expected crowd size, music preferences, etc."
                            rows={5}
                            required
                            error={errors.message}
                        />
                    </div>

                    {/* Submit */}
                    <div className="flex gap-4 pt-4">
                        <Button type="submit" variant="primary" size="md" className="flex-1">
                            Submit Booking Request
                        </Button>
                        <Button type="button" variant="ghost" size="md" onClick={handleClose}>
                            Cancel
                        </Button>
                    </div>
                </form>
            ) : (
                <div className="space-y-6">
                    {/* Success Message */}
                    <div className="text-center py-6">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-h3 font-display text-text mb-2">Request Submitted!</h3>
                        <p className="text-body text-muted">
                            Thank you for your interest. Here are your next steps:
                        </p>
                    </div>

                    {/* Next Steps */}
                    <div className="space-y-3">
                        <button
                            onClick={handleAddCalendar}
                            className="w-full p-4 bg-surface-highlight border border-border-light rounded-surface hover:border-accent transition-colors text-left group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-body font-medium text-text group-hover:text-accent transition-colors">
                                        Add Calendar Hold
                                    </h4>
                                    <p className="text-label text-muted">
                                        Download .ics file to block the date
                                    </p>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={handleSendEmail}
                            className="w-full p-4 bg-surface-highlight border border-border-light rounded-surface hover:border-accent transition-colors text-left group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-body font-medium text-text group-hover:text-accent transition-colors">
                                        Send Booking Email
                                    </h4>
                                    <p className="text-label text-muted">
                                        Open email with booking details
                                    </p>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={handleDownloadMediaKit}
                            className="w-full p-4 bg-surface-highlight border border-border-light rounded-surface hover:border-accent transition-colors text-left group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-body font-medium text-text group-hover:text-accent transition-colors">
                                        View / Download Media Kit
                                    </h4>
                                    <p className="text-label text-muted">
                                        Get press photos and bio
                                    </p>
                                </div>
                            </div>
                        </button>
                    </div>

                    <Button variant="primary" size="md" onClick={handleClose} className="w-full mt-6">
                        Done
                    </Button>
                </div>
            )}
        </Modal>
    )
}

export default BookingModal
