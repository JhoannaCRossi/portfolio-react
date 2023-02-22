import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import {TURNS} from "./constants.js";
import {checkWinnerFrom, checkEndGame} from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal";
import { saveGameFromStorage, resetGameStorage } from "./logic/storage";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    if(boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null) 
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    if(turnFromStorage) return JSON.parse(turnFromStorage);
    return TURNS.X 
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //guardar partida
    saveGameFromStorage({board: newBoard, turn: newTurn})
    // window.localStorage.setItem('board', JSON.stringify(newBoard))
    // window.localStorage.setItem('turn', JSON.stringify(newTurn))

    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti()
      setWinner(newWinner);
      // alert(`El ganador es ${newWinner}`)
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetGameStorage()
    // window.localStorage.removeItem('board')
    // window.localStorage.removeItem('turn')
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe (la vieja)</h1>
      <button onClick={resetGame}>Reset del Juego</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section> 
        { 
          winner == null ? <h3>El turno le corresponde a {turn}</h3> : winner == false ? 
          <h3>Nadie ha ganado</h3> : ''
        } 
        <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  );
}

export default App;
