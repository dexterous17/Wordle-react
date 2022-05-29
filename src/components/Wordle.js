import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keyboard from './Keyboard'
import Modal from './Modal'

export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup, usedKeys } = useWordle(solution)
  const [ showModal , setModal ] = useState(false)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if(isCorrect){
      setTimeout(()=> setModal(true),2000)
      window.removeEventListener('keyup', handleKeyup) 
    }

    if(turn > 5){
      setTimeout(()=> setModal(true),2000)
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
      {showModal && <Modal inCorrect={isCorrect} turn={turn} solution={solution}/>}
    </div>
  )
}