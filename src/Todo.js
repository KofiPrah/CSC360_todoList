import React, {useState} from "react";

export default function Todo({ title, content, dateCreated, dateCompleted, complete , id, updateTodo, deleteTodo}) {
    
    const[checked ,updateChecked] = useState(false)
    
    const handleToggleEvent = (event) => {
       updateChecked(event.target.checked)
       const updatedTodo ={title, content, dateCreated, dateCompleted:Date.now(), complete: !complete , id}
       
       updateTodo (id, updatedTodo)
}   
        
    return (
        <div>
            <h3>{title}</h3>
            <i>Date Created: {new Date(dateCreated).toString()}</i>
            <div>{content}</div>
            Completed: {complete} <input type="checkbox" value={checked} onClick={handleToggleEvent}/>
            <div>Date Completed: {complete ? new Date(dateCompleted).toString(): 'Not yet completed'}</div>
            <input type="button" value="Delete Post" onClick={()=>deleteTodo(id)} />
        </div>
    );
 }
