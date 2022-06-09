import React, { useContext } from 'react'
import StateContext from "../contexts";

import CreateToDo from '../CreateToDo'
import ToDoList from '../ToDoList';
import UserBar from '../UserBar'

export default function HeaderBar () {
    const{state} = useContext(StateContext)
    const{user}=state
    return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      <nav class ="navbar navbar-light bg-light">
        <div class="container-fluid"><span class="navbar-brand mb-0 h1">Homework 4</span></div>
      </nav>
      <UserBar/>
      {user && <ToDoList/>}
      {user && <CreateToDo />}
      </>
    )
}