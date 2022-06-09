import React, {useContext, useState} from "react";
import StateContext from "./contexts";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

export default function UserBar() {
    const {state,dispatch}= useContext(StateContext)
    const{user}=state
    if (user) {
        return <Logout user={user} dispatch={dispatch} />;
    } else {
        return (
            <>
                <Login dispatch={dispatch} />
                <Register dispatch={dispatch} />
            </>
        );
    }
}
    