import React, {useState} from 'react'
import './App.css';
import Comp from "./components/components";

function App() {

    const [data, setData] = useState([
        {id: 1, name: 'Ivan', age: 23},
        {id: 2, name: 'Petro', age: 15},
        {id: 3, name: 'Stepan', age: 65},
    ])
    const addItem = () => {
        const item = {id: 4, name: 'Igot', age: 20}
        let newarr = data.push(item)
        console.log(data)
        return{
            data: newarr
        }

    }

    return (
        <div className="App">
            <Comp data={data}/>
        <button
        onClick={addItem}>
            Click
        </button>

        </div>
    );
}

export default App;
