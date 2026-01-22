function Button({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    type = 'button',
    className = '',
    ...props
}) {
    const baseStyles = 'font-display font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
        primary: 'bg-accent text-bg hover:bg-accent/90 hover:shadow-neon',
        secondary: 'bg-surface border border-border-light text-text hover:border-accent hover:text-accent',
        ghost: 'text-text hover:bg-surface-highlight',
    }

    const sizes = {
        sm: 'px-4 py-2 text-label uppercase rounded-chip',
        md: 'px-8 py-4 text-body rounded-chip',
        lg: 'px-12 py-6 text-h3 rounded-chip',
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
