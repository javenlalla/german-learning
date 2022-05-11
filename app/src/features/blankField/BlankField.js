import React from 'react';

const BlankField = (props) => {
  const firstReplacementPosition = props.question.sentence.indexOf("####");
  const questionPiece = props.question.sentence.split("####");
  const questionPieces = questionPiece.filter(item => item);
  
  const element = <input className="border py-2 px-3 text-grey-darkest font-bold w-16 answer-field" type="text" />;

  const fullQuestion = [];
  if (firstReplacementPosition === 0) {
    fullQuestion.push(element);
  }

  for (let i = 0; i < questionPieces.length; i++) {
    if (i === 0) {
      fullQuestion.push(questionPieces[i]);
    } else {
      fullQuestion.push(element);
      fullQuestion.push(questionPieces[i]);
    }
  }

  const handleSubmit = () => {
    const inputs = [...document.getElementsByClassName("answer-field")];
    const answers = inputs.map((input) => {
      return input.value;
    })

    let correct = true;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] !== props.question.answers[i]) {
        correct = false;
      }
    }

    if (correct === false) {
      console.log("wrong answer");
    } else {
      console.log("right");
    }
  }

  return <div>
    {fullQuestion}
    <button onClick={(e) => {e.preventDefault(); handleSubmit()}}>Submit</button>
    
  </div>
}

export default BlankField;