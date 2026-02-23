import {useState} from 'react';
export default function hyandleevent(){
    const [count , setcount]=useState("");
    const handlevent = (event) => {
        setcount(event.target.value);
    }
    return(
           <div>
            <h1> sathish</h1>
            <input type="text" value={count} onChange={handlevent}></input>
            <h2>{count}</h2>          
          </div>
    );
}