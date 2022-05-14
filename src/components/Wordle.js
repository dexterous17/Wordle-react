import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keyboard from './Keyboard'

export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup, usedKeys } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if(isCorrect){
      console.log('congrats, you win!')
      window.removeEventListener('keyup', handleKeyup) 
    }

    if(turn > 5){
      console.log('Unlucky, out of guesses!')
      window.removeEventListener('keyup', handleKeyup) 
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup,isCorrect])

  return (
    <div>
      <div>solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keyboard usedKeys={usedKeys}/>
    </div>
  )
}