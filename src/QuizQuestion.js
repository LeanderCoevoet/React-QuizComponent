import React, {Component} from 'react';
import QuizQuestionButton from "./QuizQuestionButton.js"

class QuizQuestion extends Component {
    handleClick (button_text) {
        if(this.props.quiz_question.answer === button_text){
            console.log("ok")
            this.props.showNextQuestionHandler()
        }
    }
    render() {
        const listItems = this.props.quiz_question.answer_options.map((answer_option, index) => 
                            <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={index} button_text={answer_option}/>
                        )
        return(
        <div>
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
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
}

export default QuizQuestion