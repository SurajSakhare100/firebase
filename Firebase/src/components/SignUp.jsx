import React, { useState } from 'react'
import { auth ,db} from "../firebase/firebase";
import { useDispatch,useSelector } from 'react-redux'
import { setData, signup } from '../store/authSlice';
function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const dispatch=useDispatch()
    const submit=()=>{
        dispatch(signup({auth,email,password}))
        dispatch(setData({username,email,password}))
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
                submit
            </button>
        </div>
    )
}

export default SignUp
