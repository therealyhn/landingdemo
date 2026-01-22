const sizeClasses = {
  sm: "max-w-md",
  md: "max-w-2xl",
  lg: "max-w-4xl",
}

function Modal({
  open,
  onClose,
  title,
  labelledBy,
  size = "lg",
  children,
}) {
  if (!open) return null

  const titleId = labelledBy || (title ? "modal-title" : undefined)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-16 py-24">
      <div
        className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`relative z-10 w-full ${sizeClasses[size] || sizeClasses.lg} rounded-surface border border-border bg-surface shadow-soft`}
      >
        {(title || onClose) && (
          <div className="flex items-center justify-between border-b border-border px-24 py-16">
            {title && (
              <h3 id={titleId} className="text-h3">
                {title}
              </h3>
            )}
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="text-label font-medium uppercase text-muted transition-colors duration-300 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                aria-label="Close dialog"
              >
                Close
              </button>
            )}
          </div>
        )}
        <div className="px-24 py-24">{children}</div>
      </div>
    </div>
  )
}

export default Modal
