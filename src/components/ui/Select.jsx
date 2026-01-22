function Select({
    label,
    id,
    value,
    onChange,
    options = [],
    required = false,
    error,
    placeholder = 'Select an option',
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
            <select
                id={id}
                value={value}
                onChange={onChange}
                required={required}
                className={`w-full px-4 py-3 bg-surface border border-border-light rounded-sm text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none cursor-pointer ${error ? 'border-red-500' : ''} ${className}`}
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888888' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                }}
                {...props}
            >
                <option value="" disabled>{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && (
                <p className="mt-1 text-label text-red-500">{error}</p>
            )}
        </div>
    )
}

export default Select
