interface TurnViewProps {
    children: string
    isSelected: boolean
}
export function TurnView({ children, isSelected }: TurnViewProps) {
    return (
        <span className={`turn-view${isSelected? ' is-selected' : ''}`}>
            { children }
        </span>
    )
}