import React, { useState, useReducer } from "react";
import UserBar from "./UserBar";
import ToDoList from "./ToDoList";
import CreateToDo from "./CreateToDo";
import appReducer from "./reducer";

    
function App() {
  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: []})
  //const [user, dispatchUser] = useReducer(userReducer, "");  
  //const [todos,dispatchTodo] = useReducer(todoReducer,defaultTodo);
  const{user,todos}=state

  return(
    <div>  
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      <nav class ="navbar navbar-light bg-light">
        <div class="container-fluid"><span class="navbar-brand mb-0 h1">Homework 3</span></div>
      </nav>
      
      <UserBar user={state.user} dispatch={dispatch} />;
      {state.user && <CreateToDo todos={state.todos} dispatch={dispatch}/>}
      {state.user && <ToDoList todos={state.todos} dispatch={dispatch} />}
    </div>
  );
}

export default App;
