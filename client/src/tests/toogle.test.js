import React, { useState } from 'react';

export default function toggle(props) {
    const [state, setState] = useState(false);
    return (
        <button onClick={() => {
            setState(previousState => !previousState);
            props.onChange(!state);
        }}
        data-testid="toggle"
        >
        {state === true ? "Turn off" : "Turn on"}
        </button>
    )
}




//where i am looking this up https://reactjs.org/docs/testing-recipes.html