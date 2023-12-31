import React, {useState} from 'react';

const UseState = () => {
    let[a, setA] = useState(1)
    const onClickHandler = () =>{
        setA(++a)
        console.log(a)
    }
    const onClickHandlerToZero = () => {
      setA(0)
    }


    return (
        <div>
          <h1>  {a}</h1>
            <button onClick={onClickHandler}>Nubmer</button>
            <button onClick={onClickHandlerToZero}>0</button>
        </div>
    );
};

export default UseState;