import React from 'react';

const Question = (props) => {
    
    const question = props.question;

    return (
        <div className="Question">
            {question.title}
        </div>
    );
}

export default Question;