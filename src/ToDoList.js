import React from "react";
import Todo from "./Todo";

export default function ToDoList({ todos = [],setTodos }) {
    function updateTodo(index,newTodo){
         const updatedState=[...todos]
         updatedState[index]=newTodo

         setTodos(updatedState)
    }
    return (
    <div>
        {todos.map((p, i) => (
            <Todo {...p} updateTodo={updateTodo} index={i} key={"post-" + i} />
        ))}
    </div>
    );
}
