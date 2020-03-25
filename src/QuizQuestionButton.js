import React from 'react';

const QuizQuestionButton = (props) => {
    const handleClick = () => {
        props.clickHandler(props.button_text);
    }

    return ( 
        <li>
            <button onClick={handleClick}>{props.button_text}</button>
        </li>)
}

export default QuizQuestionButton