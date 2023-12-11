import React from 'react';

type ButtonPropsType ={
    title?: string
    callBack?: () => void
}

export const Button=(btn: ButtonPropsType)=>{
    const onClickHandler=()=>{
        if (btn.callBack) {
            btn.callBack();
        }
    }
    return(
        <button onClick={onClickHandler}>{btn.title}</button>
    )
}
