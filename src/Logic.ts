export function checkForWinner(newBoard: string[][], rIndex: number, cIndex: number, turn: string): boolean {
  // Detect if current row, or current column were filled.
  if (newBoard[rIndex].every((square) => square === turn) || newBoard.every((row) => row[cIndex] === turn)) return true;
  // Check if main diagonal is filled and return true in that case.
  if (rIndex == cIndex) if (newBoard.every((row, index) => !(row[index] !== turn))) return true;
  // Check if anti-diagonal is filled and return true in that case.
  let j = 2;
  if (newBoard.every((row) => row[j--] === turn)) return true
  return false
}
