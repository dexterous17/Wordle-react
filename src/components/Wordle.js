import React, { useEffect } from 'react';
import useWordle from '../hooks/useWorldly';

const Wordle = ({ solution }) => {

    const { currentGuess, handleKeyup } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    return (
        <div>
            currentGuess-{currentGuess}
        </div>
    );
};

export default Wordle;