import React from "react";
import TodoItem from "./TodoItem";
const TodoList = (props) => {
    // console.log(props.todos)
    const todos = props.todos;
    // console.log(todos);

    return(
        <ul>
            {
                todos.map(item => {
                    return <li key={item.id}>
                    <TodoItem key={item.id} todo={item} delItem={props.delItem} handleChangeProps={props.handleChangeProps} />    
                    </li>                    
                })
            }
        </ul>
    )
}

export default TodoList;