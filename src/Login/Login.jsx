import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './login.css'

function Login() {
  return (
     <div>
      <div id="content">
       <div id="main">
         <form>
           <ul><h1 id="log">Login</h1></ul><br />
           <label>Username:</label><br />
            <input type="text" onChange={(e)=>{setUserName(e.target.value)}} placeholder="Enter your Username.." /><br /><br />

            <label>Password:</label><br />
             <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your Password.." /><br /><br />

            <Link to="/home" className="btn btn-primary">Login</Link>
        </form>
      </div>
      </div>
    </div>
 )
}

export default Login