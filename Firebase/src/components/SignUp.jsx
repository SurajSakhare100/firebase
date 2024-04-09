import React, { useState } from 'react'
import { db,app} from "../firebase/firebase";
import { useDispatch,useSelector } from 'react-redux'
import { setData, signingoogle, signup } from '../store/authSlice';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const dispatch=useDispatch()
    const submit=()=>{
        dispatch(signup({auth,email,password}))
        dispatch(setData({username,email,password}))
    }
   const signinwithgoogle=()=>{
        dispatch(signingoogle({auth,provider}))
    }
    return (
        <div>
            <h1>sign Up</h1>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={submit}>
               Sign in
            </button>
            <button onClick={signinwithgoogle}>
               Sign in with google
            </button>
        </div>
    )
}

export default SignUp
