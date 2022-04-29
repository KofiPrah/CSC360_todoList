import React, { useState } from "react";

export default function Login({setUser}){
    const [username,setUsername]=useState("")
    function handleUsername(e) {setUsername(e.target.value)}

    return(
        <form onSubmit={(e)=>{e.preventDefault(); setUser(username)}}>
            <label htmlFor="login-username"></label>
			<input type="text" value={username} onChange={handleUsername} name="login-username" placeholder="Username" id="login-username"/>
            <label htmlFor="login-password"></label>
			<input type="password" name="login-password" placeholder="Password" id="login-password"/>
			<input type="submit" value="Login" disabled={username.length ===0}/>
        </form>
    );
}