import { useState } from "react"
interface SquareProps {
    r_index: number
    c_index: number
    children: string
    refreshBoard: (r_index: number, c_index: number) => void
    initialClicked: boolean
}
export function Square({ children, r_index, c_index, refreshBoard, initialClicked }: SquareProps) {
    const [clicked, setClicked] = useState(initialClicked)
    const handleClick = () => {
        if(!clicked) {
            refreshBoard(r_index, c_index)
            setClicked(true)
        }
    }
    return (
        <div onClick={handleClick} className='square'>
            { children }
        </div>
    )
}