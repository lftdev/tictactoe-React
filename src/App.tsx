import { useState } from "react";
import { Square } from "./components/Square";
import { TurnView } from "./components/TurnView";
import { checkForWinner } from "./Logic";
const PLAYERS = {
  X: "×",
  O: "o",
};
function App() {
  const [turn, setTurn] = useState(PLAYERS.X);
  const [board, paintBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [winner, setWinner] = useState("");
  const refreshBoard = (rIndex: number, cIndex: number) => {
    const newBoard = board,
      oldTurn = turn;
    newBoard[rIndex][cIndex] = oldTurn;
    paintBoard(newBoard);
    setWinner(checkForWinner(newBoard, rIndex, cIndex, oldTurn) ? oldTurn : "");
    setTurn(turn === PLAYERS.X ? PLAYERS.O : PLAYERS.X);
  };
  const resetGame = () => {
    setTurn(turn === PLAYERS.X ? PLAYERS.O : PLAYERS.X);
    paintBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setWinner("");
  };
  return (
    <>
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <section className="game">
          {board.map((row, rIndex: number) => {
            return row.map((_, cIndex) => {
              return (
                <Square key={`${rIndex}-${cIndex}`} rIndex={rIndex} cIndex={cIndex} refreshBoard={refreshBoard} clicked={false}>
                  {board[rIndex][cIndex]}
                </Square>
              );
            });
          })}
        </section>
        <section className="turn">
          <TurnView isSelected={turn === PLAYERS.X}>{PLAYERS.X}</TurnView>
          <TurnView isSelected={turn === PLAYERS.O}>{PLAYERS.O}</TurnView>
        </section>
        {winner !== "" && (
          <section className="winner">
            <div className="text">
              <h2>Winner:</h2>
              <div className="square">{winner}</div>
            </div>
            <button onClick={resetGame}>Reset</button>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
