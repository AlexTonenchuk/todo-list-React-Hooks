import React from "react";
import './todo-list-item.css';

export default function TodoListItem ({ done, label, togleDone}) {
    let classNames=' ';
    if (done===true){ classNames="dones"};
    return (
        <span>
            <input type="checkbox" checked={done?'checked':''} onChange={togleDone}/>
            <span className={classNames}>{label}</span>
        </span>
    );
};



