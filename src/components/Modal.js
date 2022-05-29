import React from 'react';

function Modal({ isCorrect, turn, solution }) {
    return (
        <div className="modal">
            {isCorrect && (
                 <div>
                 <h1>Nevermind</h1>
                 <p className="solution">{solution}</p>
                 <p>Better luck next time :)</p>
             </div>
            )}
            {!isCorrect && (
                <div>
                <h1>Nevermind</h1>
                <p className="solution">{solution}</p>
                <p>Better luck next time :)</p>
            </div>
            )}
        </div>
    );
}

export default Modal;