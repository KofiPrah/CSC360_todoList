import React, {useState} from "react";
import { useResource } from "react-request-hook";

function Todo({title, content, dateCreated, dateCompleted, complete , id, updateTodo, deleteTodo}) {
    
    const[checked ,updateChecked] = useState(false)
    

    const handleToggleEvent = (event) => {
       updateChecked(event.target.checked)
       
       const updatedTodo ={title, content, dateCreated, dateCompleted:Date.now(), complete: !complete , id}
       updateTodo (id, updatedTodo)
}   
        
    return (
        <div>
            <h3>{title}</h3>
            <div>{content}</div>
            Completed: {complete} <input type="checkbox" value={checked} onClick={handleToggleEvent}/>

            <div><i>Date Created: {new Date(dateCreated).toString()}</i></div>
            <div>Date Completed: {complete ? new Date(dateCompleted).toString(): 'Not yet completed'}</div>
            <input type="button" value="Delete Post" onClick={()=>deleteTodo(id)} />
        </div>
    );
 }
export default React.memo(Todo)