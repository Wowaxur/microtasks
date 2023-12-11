import React, {useState} from 'react';
import './App.css';
import {MouseEvent} from "react";
import {Button} from "./components/button/Button";
import {subscribe} from "diagnostics_channel";
import UseState from "./components/use_state/Use_State";
import Filters from "./components/filters/Filters";


function App() {


    const OnClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name);
    }
    const OnClickHandlerTwo = (name: string) => {
        console.log(name);
    }
    const f1 = () => {
        console.log(100200)
    }
    const f2 = (value: number) => {
        console.log(value)
    }

    const foo1 = (subscriber: string, age: number, city: string) => {
        console.log(subscriber, age, city)
    }
    const foo2 = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const foo3 = () => {
        console.log('I am Button')
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
            <div className={'Main'}>
                <div className={'Buttons'}>
                    <button onClick={OnClickHandler} name={'Vlad'}> First User
                    </button>
                    <button onClick={(event: MouseEvent<HTMLButtonElement>) => OnClickHandlerTwo('Daria')}>Second User
                    </button>
                    <button onClick={f1}>1</button>
                    <button onClick={(event: MouseEvent<HTMLButtonElement>) => f2(100200)}>2</button>
                <br/>
                <Button callBack={() => {
                    foo1('Vlad', 26, 'Live in Krd')
                }} title={'First'}/>
                <Button callBack={() => {
                    foo2('Daria', 23)
                }} title={'Second'}/>
                <Button callBack={foo3} title={'Button'}/>
            </div>
                <br/>
            <UseState/>
        </div>
           <Filters/>
        </div>
    )
}

export default App;
