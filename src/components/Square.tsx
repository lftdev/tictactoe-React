interface SquareProps {
    rIndex: number
    cIndex: number
    children: string
    refreshBoard: (rIndex: number, cIndex: number) => void
}
export function Square({ children, rIndex, cIndex, refreshBoard }: SquareProps) {
    const handleClick = () => {
        if(children == '')
            refreshBoard(rIndex, cIndex)
    }
    return (
        <div onClick={handleClick} className='square'>
            { children }
        </div>
    )
}