import React, {useState} from "react";

export default function CreateToDo({todos, setTodos}){

    const [title, setTitle]=useState("")
    const [content, setContent]= useState("")

    

    function handleTitle (evt) { setTitle(evt.target.value) }
    function handleContent (evt) { setContent(evt.target.value) }

    function handleCreate (evt) {
        const newTodo = { title, content, dateCreated:Date(Date.now()).toString() , dateCompleted: null, complete: false}
        setTodos([ newTodo,...todos ])
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