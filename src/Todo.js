import React, {useState} from "react";

export default function Todo({ title, content, dateCreated, complete }) {

    return (
        <div>
            <h3>{title}</h3>
            <i>{dateCreated}</i>
            <div>{content}</div>
            <form onSubmit={(e)=>{e.preventDefault();}}>
                <div>
                    <input type="checkbox" value={complete} name="is-complete" id="is-complete" /> 
                    <label htmlFor="is-complete">Complete</label>
                </div>
            </form>
            <br/>
        </div>
    );
 }
