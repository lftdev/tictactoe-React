interface SquareProps {
    rIndex: number
    cIndex: number
    children: string
    refreshBoard: (rIndex: number, cIndex: number) => void
    clicked: boolean
}
export function Square({ children, rIndex, cIndex, refreshBoard, clicked }: SquareProps) {
    const handleClick = () => {
        if(!clicked) {
            refreshBoard(rIndex, cIndex)
            clicked = true
        }
    }
    return (
        <div onClick={handleClick} className='square'>
            { children }
        </div>
    )
}