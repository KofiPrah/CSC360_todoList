import React, { useContext } from "react";
import { useResource } from "react-request-hook";
import StateContext from "./contexts";
import Todo from "./Todo";

export default function ToDoList({ todos=[]}) {
    const {dispatch}=useContext(StateContext)
    
    
    const[task,ToggleTodo]= useResource((updatedTodo)=>({
        url: `/todos/${updatedTodo.id}`,
        method:'patch',
        data: updatedTodo
}))

    const updateTodo=(id,updatedTodo)=>{
        const updatedTodos= todos.map((todo)=>todo.id===id ? updatedTodo:todo)
        ToggleTodo(updatedTodo)
        dispatch({type:"TOGGLE_TODO",updatedTodos})
    }
    const [todo,DeleteToDo] = useResource(id=>({
        url:`/todos/${id}`,
        method: 'delete',

    }))
    const deleteTodo = (id)=>{
        const updatedTodos = todos.filter((todo)=> todo.id !== id )
        DeleteToDo(id);
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
