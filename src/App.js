import { useEffect, useState } from 'react';
import Wordle from './components/Wordle';

function App() {

  const [solution, setSolution] = useState()

  useEffect(() => {
    fetch('http://localhost:3000/solutions')
      .then(res => res.json())
      .then(json => {
        const randomSolution = json[Math.floor(Math.random() * json.length)]
        setSolution(randomSolution.word)
      })

  }, [setSolution])

  return (
    <div className="App">
      <h1>React Wordle</h1>
      {solution}
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
