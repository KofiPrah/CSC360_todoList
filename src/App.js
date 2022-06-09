import React, {useState, useEffect, createContext, useReducer} from "react";
import {useResource} from 'react-request-hook'

import UserBar from "./UserBar";
import ToDoList from "./ToDoList";
import CreateToDo from "./CreateToDo";
import StateContext from "./contexts";

import appReducer from "./reducer";
import HeaderBar from "./pages/HeaderBar";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";

import { Router, View } from 'react-navi'
import { mount, route } from 'navi'

function App() {
  
  const[state,dispatch]= useReducer(appReducer,{user:"",todos:[]});

  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/todos/create':route({ view: <CreateToDo /> }),
    '/todos/:id': route(req => {
        return { view: <TodoPage id={req.params.id} /> }
    }),
})

useEffect(()=>{
  console.log('user effect hook firing')
  if (state.user){
    document.title= `${state.user}'s Blog`
  }else{
    document.title='My Blog'
  }
},[state.user])



  return(
      <Router routes={routes}>
        <StateContext.Provider value={{state,dispatch}}>
          <HeaderBar/>
          <View/>
        </StateContext.Provider>
      </Router>
  );

}

export default App;
