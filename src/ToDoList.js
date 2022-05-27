import React from "react";
import Todo from "./Todo";

export default function ToDoList({ todos=[], dispatch}) {
    const updateTodo=(id,updatedTodo)=>{
        const updatedTodos= todos.map((todo)=>todo.id===id ? updatedTodo:todo)
        dispatch({type:"TOGGLE_TODO",updatedTodos})
    }
    const deleteTodo = (id)=>{
       const updatedTodos = todos.filter((todo)=> todo.id !== id )
        dispatch({type:"DELETE_TODO", updatedTodos})
    }
    return (
    <div>
        {todos.map((p, i) => (
            <Todo {...p} key={p.id} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        ))}
    </div>
    );
}        
