export function H1 ({children, className}: { children: React.ReactNode, className?: string }) {
    return (
        <h1 className={`text-4xl sm:text-6xl font-bold text-center font-display  ${className}`}>{children}</h1>
    )
}

export function H2 ({children, className}: { children: React.ReactNode, className?: string }) {
    return (
        <h2 className={`text-2xl sm:text-4xl font-bold text-center font-display ${className}`}>{children}</h2>
    )
}

export function H3 ({children, className}: { children: React.ReactNode, className?: string }) {
    return (
        <h3 className={`text-xl sm:text-2xl font-bold text-center font-display ${className}`}>{children}</h3>
    )
}
