import React, {useState} from "react";
import UserBar from "./UserBar";
import ToDoList from "./ToDoList";
import CreateToDo from "./CreateToDo";

function App() {
  const [user,setUser]=useState("")
  //const posts= [{title:'Web Applications: Homework 2', content: 'build todo list application',author:"Bot" }];
  const [todos,setTodos] = useState([])

  return(
    <div>  
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      <nav class ="navbar navbar-light bg-light">
        <div class="container-fluid"><span class="navbar-brand mb-0 h1">Homework 2</span></div>
      </nav>
        <UserBar user={user} setUser={setUser}/>
        {user && <CreateToDo todos={todos} setTodos={setTodos}/>}
        {user && <ToDoList todos={todos} setTodos={setTodos}/>}
    </div>
  );
}

export default App;
