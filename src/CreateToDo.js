import React, {useState, useContext} from "react";
import { useResource } from "react-request-hook";
import StateContext from "./contexts";


export default function CreateToDo(){

    const [title, setTitle]=useState("")
    const [content, setContent]= useState("")
    
    const{dispatch}=useContext(StateContext)
    

    const[todo, CreateToDo]=useResource((newTodo)=>({
        url:'/todos', 
        method:'post',
        data: newTodo
    }))


    function handleTitle (evt) { setTitle(evt.target.value) }
    function handleContent (evt) { setContent(evt.target.value) }

    function handleCreate () {
        const newTodo = {type:'CREATE_TODO', title, content, dateCreated:Date(Date.now()).toString() , dateCompleted: null, complete: false, id:Math.floor(Math.random()* 100000)}
        CreateToDo(newTodo);
        dispatch({type:"CREATE_TODO",...newTodo})
    }
    
    
    return(
        <>
        <h2> Create a new Task</h2>
        <form onSubmit={(e)=> { e.preventDefault(); handleCreate(e)}}>
            <div>
                <label htmlFor="create-title"></label>
                <input type="text" value={title} onChange={handleTitle} placeholder="Title" name="create-title" id="create-title" />
            </div>
            <textarea value={content} onChange={handleContent} placeholder="Description" />
            <input type="submit" value="Create"/>
        </form>
        </>
    );
}