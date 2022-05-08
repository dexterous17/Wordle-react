import { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState(['brave', 'harsh']) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)

    // format a guess into an array of letter objects 
    // e.g. [{key: 'a', color: 'yellow'}]
    const formatGuess = () => {
        console.log('formatting the guess - ', currentGuess)
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((l) => {
            return { key: l, color: 'grey' }
        })

        formattedGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key) {
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })

        formattedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !== 'green') {
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })

        return formattedGuess
    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () => {

    }

    // handle keyup event & track current guess
    // if user presses enter, add the new guess
    const handleKeyup = ({ key }) => {

        if (key === 'Enter') {
            setTurn(turn + 1)
            if (turn > 5) {
                console.log('Use have used all your guesse')
                return
            }

            if (history.includes(currentGuess)) {
                console.log('U have already tried it')
                return
            }

            if (currentGuess.length !== 5) {
                console.log('word must be 5 chars.')
                return
            }

            const fromatted = formatGuess()
            console.log(fromatted)
        }


        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }

        if (/^[A-Za-z]$/.test(key)) {

            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }

        }
    }

    return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useWordle