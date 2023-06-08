import { useState } from 'react'
import { Square } from './components/Square'
import { TurnView } from './components/TurnView'
import './App.css'
const PLAYERS = {
  X: '×',
  O: 'o',
}
function App() {
  const [turn, setTurn] = useState(PLAYERS.X)
  const [board, paintBoard] = useState([['', '', ''], ['', '', ''], ['', '', '']])
  const [winner, setWinner] = useState('')
  const refreshBoard = (rIndex: number, cIndex: number) => {
    const newBoard = board
    newBoard[rIndex][cIndex] = turn
    paintBoard(newBoard)
    setWinner(checkForWinner(newBoard, rIndex, cIndex)? turn : '')
    setTurn(turn === PLAYERS.X? PLAYERS.O : PLAYERS.X)
  }
  function checkForWinner (newBoard: string[][], rIndex: number, cIndex: number): boolean {
    // Check if main diagonal is filled and return true in that case.
    if (rIndex == cIndex) {
       const win = () => {
        for (let i = 0; i < 3; i++)
          if (newBoard[i][i] !== turn)
            return false
        return true
      }
      if (win()) return true
    }
    // Check if anti-diagonal is filled and return true in that case.
    if (((rIndex == 1) && (cIndex == 1)) || ((rIndex == 0) && (cIndex == 2)) || ((rIndex == 2) && (cIndex == 0))) {
      const win = () => {
        let j = 2
        for (let i = 0; i < 3; i++)
          if (newBoard[i][j--] !== turn)
            return false
        return true
      }
      if (win()) return true
    }
    const relativeRowIsFilled = () => newBoard[rIndex].every(square => square === turn)
    const relativeColumnIsFilled = () => newBoard.every(row => row[cIndex] === turn)
    // Detect if current row, or current column were filled by the latest player.
    if (relativeRowIsFilled() || relativeColumnIsFilled())
      return true
    return false
  }
  const resetGame = () => {
    setTurn(turn === PLAYERS.X? PLAYERS.O : PLAYERS.X)
    paintBoard([['', '', ''], ['', '', ''], ['', '', '']])
    setWinner('')
  }
  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <section className='game'>
          {board.map((row, rIndex: number) => {
            return row.map((_, cIndex) => {
              return (
                <Square key={`${rIndex}-${cIndex}`} rIndex={rIndex} cIndex={cIndex} refreshBoard={refreshBoard} clicked={false}>{board[rIndex][cIndex]}</Square>
              )
            })
          })}
        </section>
        <section className='turn'>
          <TurnView isSelected={turn === PLAYERS.X}>{PLAYERS.X}</TurnView>
          <TurnView isSelected={turn === PLAYERS.O}>{PLAYERS.O}</TurnView>
        </section>
        {
          winner !== '' && (
            <section className="winner">
              <div className="text">
                <h2>Winner:</h2>
                <div className="square">{winner}</div>
              </div>
              <button onClick={resetGame}>Reset</button>
            </section>
          )
        }
      </main>
    </>
  )
}

export default App
