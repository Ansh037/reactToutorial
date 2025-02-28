import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);

  const addValue = () => {
    console.log("clicked", run);
    setRun((prevRun) => prevRun + 4);
  };

  const addWicket = () => {
    setWicket((prevWicket) => prevWicket + 1);
  };

  return (
    <>
      <h1>Who will win</h1>
      <h2>Score of first innings: {run}-{wicket}</h2>
      <button onClick={addValue}>Add Run</button>
      <br />
      <button onClick={addWicket}>Add Wicket</button>
    </>
  );
}

export default App
