function Container({ children, className = '', as = 'div' }) {
    const Component = as

    return (
        <Component className={`container mx-auto ${className}`}>
            {children}
        </Component>
    )
}

export default Container
