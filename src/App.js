import { Board } from './board'
import { styled } from '@mui/system'
import questions from './questions.json'
import { Typography } from '@mui/material'

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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h3" gutterBottom component="div">
            { topic.question }
          </Typography>
          <Board answers={initialState} />
        </div>
      </CenteredComponent>
    </div>
  );
}

export default App;
