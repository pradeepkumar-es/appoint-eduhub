import app from "../firebase"
import React from 'react'
import { useState } from "react"
import { getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword
     } from "firebase/auth";

const Login = () => {
    const auth = getAuth();
    const [data, setData] = useState({})
    const handleInput =(event)=>{
      let newInput = {[event.target.name]: event.target.value};
      setData({...data, ...newInput});
    }
    const handleSignUp =()=> {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((response)=>{
            console.log(response.user)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    const handleSignIn =()=>{
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((response)=>{
            console.log(response.user)
        })
        .catch((err)=>{
            alert(err.message)
        })
       
    }

  return (
    <div className="login">
             <input type="email" placeholder="password" name="email" required onChange={(event)=>handleInput(event)} />
        <input type="password" placeholder="password" name="password" required onChange={(event)=>handleInput(event)}  />
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

export default Login
