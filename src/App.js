import { Board } from './board'

function App() {
  const questions = [{text: 'Apples', count: 64, isFlipped: false}, {text: 'Bananas', count: 8, isFlipped: true}]
  const initialState = Array(8).fill({text: '', isFlipped: false})

  console.log(JSON.stringify(initialState))
  return (
    <Board questions={initialState} />
  );
}

export default App;
