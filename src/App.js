import { Board } from './board'
import { styled } from '@mui/system'

const CenteredComponent = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '100vh'
})

function App() {
  const questions = [{text: 'Apples', count: 64, isFlipped: false}, {text: 'Bananas', count: 8, isFlipped: true}]
  const initialState = Array(8).fill({text: '', isFlipped: false})
  questions.forEach((question, index) => {
    initialState[index] = question
  })

  return (
    <CenteredComponent>
      <Board questions={initialState} />
    </CenteredComponent>
  );
}

export default App;
