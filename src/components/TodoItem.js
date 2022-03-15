import React, { useState } from "react";

const TodoItem = (props) => {
    const {id,title,complated} = props.todo;

    return (
        <div>
            <input type="checkbox" checked={complated} onChange={()=>props.handleChangeProps(id)} />
            <span>{title}</span>
            <input type="button" value="Delete" onClick={() => props.delItem(id)} />
        </div>
    )
}

export default TodoItem;