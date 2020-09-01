import React from 'react';

const Like = (props) => {
    return (
        <div className="like">
            <h3 onClick={() => props.setPrioritied(props.id)}>{props.prioritized === props.id && '✔️'} {props.title}</h3>
            <input type="checkbox" onChange={() => props.togglelike(props.id)} checked={props.is_liked} />
        </div>
    )
}
export default Like;