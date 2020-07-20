import React, { useState } from 'react';
import './App.css';
const App = () => {
    const [name, setName] = useState();
    const[lastName,setlast] = useState();
    const [short, fullName] = useState();
    const[lastPri,setLasti] = useState();
    // here (event) is used for show the text value
    const inputEvent = (event) => {
        // console.log(event.target.value);
        setName(event.target.value); };
        const inputEvents = (event) =>{
            setlast(event.target.value);}
    const clickPe = (event) => {
        event.preventDefault();
        fullName(name);
        setLasti(lastName) };
    return(
        <> <form onSubmit={clickPe}>
            <div>
            <h1>Hello {short}{lastPri}</h1>
            <input type="text" placeholder="Enter your Name" onChange={inputEvent} value={name} />
            <br />
            <input type="text" placeholder="Enter your Last Name" onChange={inputEvents} value={lastName} />
            <button type="submit">submit 🥂 </button>
        </div>
        </form>
        </> );
}
export default App;