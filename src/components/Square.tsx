import { useState } from "react"
interface SquareProps {
    index: number
    children: string,
    refreshBoard: (index: number) => void
    initialClicked: boolean
}
export function Square({ children, index, refreshBoard, initialClicked }: SquareProps) {
    const [clicked, setClicked] = useState(initialClicked)
    const handleClick = () => {
        if(!clicked) {
            refreshBoard(index)
            setClicked(true)
        }
    }
    return (
        <div onClick={handleClick} className='square'>
            { children }
        </div>
    )
}