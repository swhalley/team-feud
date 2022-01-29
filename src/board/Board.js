import React, { useState } from 'react'
import {Grid} from '@mui/material'
import BoardCard from './BoardCard';

function Board(props) {
  const [questions, setQuestions] = useState(props.questions)

  const flipCard = (index, question) =>{
    const newState = [...questions]
    newState[index].isFlipped = !question.isFlipped

    setQuestions(newState)
  }

  return (
    <Grid container direction="column" spacing={2} sx={{width: 1000, height:400}}>
        {questions.map((question, index) => (
            <Grid item xs={2} key={index}>
                <BoardCard question={question} index={index+1} onClick={flipCard} />
            </Grid>
        ))}   
    </Grid>
  );
}

export default Board;
