import React    from 'react';

const QuizEnd = (props) => {
    const handleResetClick = () => {
        props.resetClickHandler()
    }

    return (
        <div>
            <p>Thanks for playing!</p>
            <a onClick={handleResetClick} href=''>Reset Quiz</a>
        </div>
        )
}

export default QuizEnd;