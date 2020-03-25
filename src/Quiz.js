import React, {useReducer} from 'react';
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json')

const Quiz = () => {

    const initialState = { quizPostion: 1}

    const reducer = (state, action) => {
        switch (action.type){
            case "next":
                return {quizPostion: state.quizPostion + 1};
            case "reset":
                return {quizPostion: 1};
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const isQuizEnd = state.quizPostion - 1 === quizData.quiz_questions.length  ;

    return (
    <div>
        { isQuizEnd
         ? <QuizEnd resetClickHandler={() => dispatch({type: "reset"})}/>
        :<QuizQuestion showNextQuestionHandler={() => dispatch({type: "next"})} quiz_question={quizData.quiz_questions[state.quizPostion - 1]}/>
        }
    </div>
    )
}

export default Quiz;
