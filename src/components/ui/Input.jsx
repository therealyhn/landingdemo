function Input({
  id,
  label,
  type = "text",
  hint,
  error,
  className = "",
  ...props
}) {
  const describedBy = hint || error ? `${id}-hint` : undefined

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <label
        htmlFor={id}
        className="text-label font-medium uppercase text-muted"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className="rounded-surface border border-border bg-surface px-8 py-4 text-body text-text outline-none transition-colors duration-300 placeholder:text-muted/70 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
        {...props}
      />
      {(hint || error) && (
        <p
          id={describedBy}
          className={error ? "text-body text-accent" : "text-body text-muted"}
        >
          {error || hint}
        </p>
      )}
    </div>
  )
}

export default Input
