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
  const refreshBoard = (r_index: number, c_index: number) => {
    const newBoard = board
    newBoard[r_index][c_index] = turn
    paintBoard(newBoard)
    checkForWinner(newBoard, r_index, c_index)
    setTurn(turn === PLAYERS.X? PLAYERS.O : PLAYERS.X)
  }
  const checkForWinner = (newBoard: string[][], r_index: number, c_index: number) => {
    let winner = ''
    if (newBoard[r_index].every((square) => square === turn) || (newBoard.every((row) => row[c_index] === turn))) {
      winner = turn
      console.log('Winner: ' + turn)
    }
    return winner
  }
  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <section className='game'>
          {board.map((row, r_index: number) => {
            return row.map((_, c_index) => {
              return (
                <Square key={`${r_index}-${c_index}`} r_index={r_index} c_index={c_index} refreshBoard={refreshBoard} initialClicked={false}>{board[r_index][c_index]}</Square>
              )
            })
          })}
        </section>
        <section className='turn'>
          <TurnView isSelected={turn === PLAYERS.X}>{PLAYERS.X}</TurnView>
          <TurnView isSelected={turn === PLAYERS.O}>{PLAYERS.O}</TurnView>
        </section>
      </main>
    </>
  )
}

export default App
