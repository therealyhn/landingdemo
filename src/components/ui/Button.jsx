const baseClasses =
  "inline-flex items-center justify-center gap-8 rounded-chip text-body font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-60"

const variantClasses = {
  primary: "bg-accent text-bg hover:bg-accent/90",
  secondary: "border border-border bg-transparent text-text hover:bg-surface",
  ghost: "text-text hover:text-accent",
}

const sizeClasses = {
  md: "px-8 py-4",
  lg: "px-12 py-4",
}

function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}) {
  const classes = [
    baseClasses,
    variantClasses[variant] || variantClasses.primary,
    sizeClasses[size] || sizeClasses.md,
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return <button type={type} className={classes} {...props} />
}

export default Button
