function CornerMarks({ className = '', size = 'md' }) {
    const sizes = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
    }

    return (
        <>
            <div className={`absolute -top-4 -left-4 ${sizes[size]} border-l-2 border-t-2 border-accent ${className}`} />
            <div className={`absolute -bottom-4 -right-4 ${sizes[size]} border-r-2 border-b-2 border-accent ${className}`} />
        </>
    )
}

export default CornerMarks
