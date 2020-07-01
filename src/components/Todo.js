// === Dependencies ===
import React from 'react';

function Todo (props){
    return <div onClick={props.toggleStatus}>{props.text}</div>
}

export default Todo;