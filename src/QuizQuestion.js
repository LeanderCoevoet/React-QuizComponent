import React, { useState} from 'react';
import QuizQuestionButton from "./QuizQuestionButton.js"

const QuizQuestion = (props) => {
    const [incorrectAnswer, setIncorrectAnswer] = useState(false)
      
    const handleClick = (button_text) => {
        if(props.quiz_question.answer === button_text){
            props.showNextQuestionHandler();
            setIncorrectAnswer(false);
        } else {
            setIncorrectAnswer(true);
        }
    }

    const listItems = props.quiz_question.answer_options.map((answer_option, index) => <QuizQuestionButton clickHandler={handleClick} key={index} button_text={answer_option}/>)

    return(
        <div>
            <main>
                {incorrectAnswer? <p className="error">Sorry, that's not right</p> : null }
                <section>
                    <p>{props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {listItems}
                    </ul>
                </section>
            </main>
        </div>
    )
}

export default QuizQuestion