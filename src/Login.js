import React, { useState,useEffect } from "react";
import { useResource } from "react-request-hook";

export default function Login({dispatch}){
    const [username,setUsername]=useState("")
    const[loginFailed,setLoginFailed]= useState(false)
    const[password,setPassword]= useState("")


    function handlePassword(e){setPassword(e.target.value)}
    function handleUsername(e) {setUsername(e.target.value)}

    const[user,login]=useResource((username,password)=>({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method:'get'
    }));

    useEffect(()=>{
        if (user&&user.data){
            if(user.data.length>0){
                setLoginFailed(false);
                dispatch({type:'LOGIN',username:user.data[0].username})
            }else{
                setLoginFailed(true)
            }
        }
    },[user])


    return(
        <form onSubmit={e=>{e.preventDefault(); login(username,password)}}>
        

            <label htmlFor="login-username"></label>
			<input type="text" value={username} onChange={handleUsername} name="login-username" placeholder="Username" id="login-username"/>
            <label htmlFor="login-password"></label>
			<input type="password" value={password} onChange={handlePassword} name="login-username" placeholder="Password" id="login-username"/>
			<input type="submit" value="Login" disabled={username.length ===0}/>
            {loginFailed && <span style={{color:'red'}}>Invalid username or password</span>}
        </form>
    );
}