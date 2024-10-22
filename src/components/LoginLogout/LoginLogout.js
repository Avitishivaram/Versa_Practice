import React from "react";
import './LoginLogout.css'

let loggedIn=true;


function Header(){
    return(
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us </li>
            <li>Overview</li>
            {
                loggedIn ?(<li>Logout</li>):(<li>Login</li>)
            }
        </ul>
        
    )
}
export default Header