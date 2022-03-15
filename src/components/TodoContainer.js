import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid";

import TodoInput from "./TodoInput";
import Header from "./TodoHeader";
import TodoList from "./TodoLists";

const TodoContainer = () => {
    const [todos,setTodos] = useState([]);

    const addTodoProps = (title) =>{
        // console.log(title, "title from Container page")
        const newDotos = {
            id:uuidv4(),
            title:title,
            completed:true
        }
        setTodos([...todos,newDotos])
        // console.log(todos)
    }
    const handleChangeProps = (id) => {

        setTodos(prevState =>
            prevState.map(todo => {
              if (todo.id === id) {
                return {
                  ...todo,
                  completed: !todo.completed,
                }
              }
              return todo
            })
          )


    }

    useEffect(() => {
        console.log("test run")
      
        // getting stored items
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
      
        if (loadedTodos) {
          setTodos(loadedTodos)
        }
    }, [setTodos])

    useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
      }, [todos])

      const delItem = (id) => {
        setTodos([
            ...todos.filter(item=>{
                if(item.id != id) return item;
            })
        ])
      }

    return (
        <div className="container">
        <div className="inner">
            <Header />
            <TodoInput addTodoProps={addTodoProps} />
            <TodoList todos={todos} handleChangeProps = {handleChangeProps} delItem={delItem} />
        </div>
        </div>
    )
}

export default TodoContainer;