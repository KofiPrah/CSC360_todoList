import React, {useState} from "react";

export default function CreateToDo({todos, setTodos}){

    const [title, setTitle]=useState("")
    const [content, setContent]= useState("")
    const [dateCreated, setDate]= useState(Date(Date.now()).toString())
    const [complete, setComplete]=useState(false)
    

    function handleTitle (evt) { setTitle(evt.target.value) }
    function updateComplete (evt) {setComplete()}
    function handleContent (evt) { setContent(evt.target.value) }
    function handleDate (evt) {
        const time= Date.now()
        setDate(new Date(time).toString())}
    
    function handleCreate (evt) {
        const newTodo = { title, content, dateCreated, complete}
        setTodos([ newTodo,...todos ])
    }
    
    
    return(
        <>
        <h2> Create a new Task</h2>
        <form onSubmit={(e)=> { e.preventDefault(); handleDate(e); handleCreate(e)}}>
            <div>
                <label htmlFor="create-title"></label>
                <input type="text" value={title} onChange={handleTitle} placeholder="Title" name="create-title" id="create-title" />
            </div>
            <textarea value={content} onChange={handleContent} placeholder="Description" />
            <div>
                <input type="checkbox" value={complete} onChange={updateComplete} name="is-complete" id="is-complete" /> 
                <label htmlFor="is-complete">Complete</label>
            </div>
            <input type="submit" value="Create"/>
        </form>
        </>
    );
}