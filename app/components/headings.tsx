export function H1 ({children, className}: { children: React.ReactNode, className?: string }) {
    return (
        <h1 className={`text-6xl font-bold text-center my-8 font-display ${className}`}>{children}</h1>
    )
}

export function H2 ({children, className}: { children: React.ReactNode, className?: string }) {
    return (
        <h2 className="text-4xl font-bold text-center my-8 font-display">{children}</h2>
    )
}

export function H3 ({children, className}: { children: React.ReactNode, className?: string }) {
    return (
        <h3 className="text-2xl font-bold text-center my-8 font-display">{children}</h3>
    )
}
