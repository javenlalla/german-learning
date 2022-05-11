import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlankField from '../blankField/BlankField';
import { fetchConjunctions, selectAllConjunctions } from './conjunctionsSlice';

export default function Conjunctions() {
  const dispatch = useDispatch();
  const conjunctions = useSelector(selectAllConjunctions);

  useEffect(() => {
    dispatch(fetchConjunctions());
  }, [])

  const testConjunctions = [{
    id: 1,
    sentence: "Ich musste zu meiner Frau nach Hause, #### sie krank ####.",
    answers: ["weil", "ist"]
  }]

  const sumbitAnswer = (question, answers) => {
    
  }

  const renderQuestions = testConjunctions.map((question) => {
    return <BlankField key={question.id} question={question} submitHandler={sumbitAnswer} />
  });

  return (
    <div>
      {renderQuestions}
    </div>
  )
}