import React, {useState} from 'react'
import './App.css';
import Comp from "./components/components";

function App() {

    const [counter, setCounter] = useState(0)

  return (
    <div className="App">
        <p>{counter}</p>
        <button
            onClick={() => setCounter(counter+5)}
        >
            Click Me
        </button>

        <Comp counter={counter}/>
    </div>
  );
}

export default App;
