import React, { useState } from 'react'
import {Grid} from '@mui/material'
import BoardCard from './BoardCard';

function Board(props) {
  const [answers, setAnswers] = useState(props.answers)

  const flipCard = (index, card) =>{
    const newState = [...answers]
    newState[index].isFlipped = !card.isFlipped

    setAnswers(newState)
  }

  return (
    <Grid container direction="column" spacing={2} sx={{width: 1000, height:400}}>
        {answers.map((answer, index) => (
            <Grid item xs={2} key={index}>
                <BoardCard answer={answer} index={index+1} onClick={flipCard} />
            </Grid>
        ))}   
    </Grid>
  );
}

export default Board;
