function Textarea({
    label,
    id,
    value,
    onChange,
    placeholder,
    required = false,
    error,
    rows = 4,
    className = '',
    ...props
}) {
    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={id}
                    className="block text-label uppercase text-muted mb-2"
                >
                    {label} {required && <span className="text-accent">*</span>}
                </label>
            )}
            <textarea
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                rows={rows}
                className={`w-full px-4 py-3 bg-surface border border-border-light rounded-sm text-text placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none ${error ? 'border-red-500' : ''} ${className}`}
                {...props}
            />
            {error && (
                <p className="mt-1 text-label text-red-500">{error}</p>
            )}
        </div>
    )
}

export default Textarea
