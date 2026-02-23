import {useState} from 'react';
export default function statemass(){
    const [count , setcount]=useState(1);
    const handlevent = () => {
        setcount(count+2);
    }
    return(
           <div>
            <h1> sathish{count}</h1>
            <button onMouseOver={handlevent}>counter</button>
          </div>
    );
}