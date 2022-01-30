import { Board } from './board'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'
import questions from './questions.json'

const CenteredComponent = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '100vh'
})

function App() {
  const params = new URLSearchParams(window.location.search)
  const topic = questions[params.get('topic')]

  if(!topic){
    return (
      <div>
        {Object.keys(questions).join(', ')}
      </div>
    )
  }

  const initialState = Array(8).fill({text: '', isFlipped: false}).map((question, index) => {
    return {
      ...question,
      text: topic.answers[index]?.text,
      count: topic.answers[index]?.count,
    }
  })

  return (
    <div>
      {/* <Typography variant="h3" gutterBottom component="div">
        {topic.question}
      </Typography> */}
      <CenteredComponent>
        <Board answers={initialState} />
      </CenteredComponent>
    </div>
  );
}

export default App;
