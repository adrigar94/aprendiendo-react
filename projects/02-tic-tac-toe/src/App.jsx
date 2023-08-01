import { useState, useEffect } from "react"
import { Square } from "./components/Square"
import confetti from 'canvas-confetti'
import { TURNS, WINNER_COMBOS } from "./constants"
import { WinnerModal } from "./components/WinnerModal"



function App() {

    const [board, setBoard] = useState(() => {
        const boardFromLocalStorage = window.localStorage.getItem('board')
        return boardFromLocalStorage
            ? JSON.parse(boardFromLocalStorage)
            : Array(9).fill(null)
    })
    const [turn, setTurn] = useState(() => {
        const turnFromLocalStorage = window.localStorage.getItem('turn')
        return turnFromLocalStorage
            ? JSON.parse(turnFromLocalStorage)
            : TURNS.X
    })
    const [winner, setWinner] = useState(null)

    const checkWinner = (boardToCheck) => {
        for (const combo of WINNER_COMBOS) {
            const [a, b, c] = combo
            if (boardToCheck[a] &&
                boardToCheck[a] === boardToCheck[b] &&
                boardToCheck[a] === boardToCheck[c]) {
                return boardToCheck[a]
            }
        }
        return null
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)

        window.localStorage.removeItem('board')
        window.localStorage.removeItem('turn')
    }

    const checkEndGame = (boardToCheck) => {
        return boardToCheck.every(square => square !== null) && winner === null
    }

    const saveGame = (board, turn) => {
        window.localStorage.setItem('board', JSON.stringify(board))
        window.localStorage.setItem('turn', JSON.stringify(turn))
    }

    const updateBoard = (index) => {
        if (board[index] || winner) return
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)

        const newWinner = checkWinner(newBoard)
        if (newWinner) {
            confetti()
            setWinner(newWinner)
        } else if (checkEndGame(newBoard)) {
            setWinner(false)
        }

    }

    useEffect(() => {
        saveGame(board, turn)
    }, [turn, board])


    return (
        <main className="board">
            <h1>Tic Tac Toe</h1>
            <button onClick={resetGame} >
                Reiniciar juego
            </button>
            <section className="game">
                {
                    board.map((square, index) => {
                        return (
                            <Square key={index}
                                index={index}
                                updateBoard={updateBoard}
                            >
                                {square}
                            </Square>
                        )
                    })
                }
            </section>
            <section className="turn">
                <Square isSelected={turn === TURNS.X}>
                    {TURNS.X}
                </Square>
                <Square isSelected={turn === TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>
            <WinnerModal winner={winner} resetGame={resetGame} />
        </main>
    )
}

export default App
