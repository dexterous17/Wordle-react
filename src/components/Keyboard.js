import React, { useEffect, useState } from 'react';

const Keyboard = ({usedKeys}) => {

    const [letters, setLetters] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/letters')
            .then(res => res.json())
            .then(json => {
                setLetters(json)
            })
    })

    return (
        <div className='keypad'>
            {
                letters && letters.map(
                    (l) => {
                        const color = usedKeys[l.key]
                        return (
                            <div key={l.key} className={color}>{l.key}</div>
                        )
                    }
                )
            }
        </div>

    );
};

export default Keyboard;