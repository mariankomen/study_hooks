import React, {useState} from 'react'
import './App.css';
import Comp from "./components/components";

function App() {
    const [style, setStyle] = useState('default')

    document.title = style

    return (
        <div className="App">
        <button onClick={()=>setStyle('Hello')}>Hello</button>
        <button onClick={()=>setStyle('World')}>World</button>
            <p>{document.title}</p>
        </div>
    );
}

export default App;
