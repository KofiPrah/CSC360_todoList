import React, {useState} from "react";

export default function Todo({ title, content, dateCreated, dateCompleted, complete,dispatch, index}) {
    
    function handleCheckbox (event) {
        dispatch({type:"TOGGLE_TODO",title, content, dateCreated,dateCompleted: Date(Date.now()).toString(), complete: event.target.checked, index})
}   
        
    return (
        <div>
            <h3>{title}</h3>
            <i>Date Created: {dateCreated}</i>
            <div>{content}</div>
            Completed: {complete} <input type="checkbox" value={complete} onChange={handleCheckbox}/>
            <div>Date Completed: {dateCompleted}</div>
        </div>
    );
 }
