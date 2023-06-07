import { useState } from 'react'
import { Square } from './components/Square'
import { TurnView } from './components/TurnView'
import './App.css'
const PLAYERS = {
  X: '×',
  O: 'o'
}
function App() {
  const [turn, setTurn] = useState(PLAYERS.X)
  const [board, paintBoard] = useState(Array(9).fill(null))
  const refreshBoard = (index: number) => {
    const newTurn = turn === PLAYERS.X? PLAYERS.O : PLAYERS.X
    setTurn(newTurn)
    const newBoard = board
    newBoard[index] = newTurn
    paintBoard(newBoard)
  }
  return (
    <>
      <main className="board">
      <h1>Tic Tac Toe</h1>
        <section className="game">
          {
            board.map((_, index) => {
              return (
                <Square key={index} index={index} refreshBoard={refreshBoard} initialClicked={false}>{board[index]}</Square>
              )
            })
          }
        </section>
        <section className="turn">
          <TurnView isSelected={turn === PLAYERS.X}>×</TurnView>
          <TurnView isSelected={turn === PLAYERS.O}>O</TurnView>
        </section>
      </main>
    </>
  )
}

export default App
