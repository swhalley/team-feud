import React, { useState } from 'react'
import {Grid} from '@mui/material'
import BoardCard from './BoardCard';


function Board() {
  const [questions, setQuestions] = useState([{text: 'Apples', count: 64, isFlipped: false}, {text: 'Bananas', count: 8, isFlipped: true}])

  return (
    <Grid container spacing={2} sx={{width: 1000, height:400}}>
        {questions.map((question, index) => (
            <Grid item xs={5} key={index}>
                <BoardCard question={question} index={index+1} />
            </Grid>
        ))}   
    </Grid>
  );
}

export default Board;
