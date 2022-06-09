import React, { useEffect, useContext } from 'react'
import  StateContext  from '../contexts'
import { useResource } from 'react-request-hook'
import ToDoList from '../ToDoList'

export default function HomePage () {
    const {state,dispatch} = useContext(StateContext)
    const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
    }))
    
    useEffect(getTodos, [])
    
    useEffect(() => {
    if (todos && todos.data) {
    dispatch({ type: 'FETCH_TODOS', todos: todos.data.reverse() })
    }
    }, [todos])
    


    const{data, isLoading}=todos;

    return( 
        <>  
            {isLoading && 'Todos Loading...'}<ToDoList todos={state.todos}/>
        </>
    )
}