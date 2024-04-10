import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { app } from './firebase/firebase'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
// const db=getDatabase(app)
const auth = getAuth(app);
function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const putData=()=>{
    set(ref(db,'users/Raj'),{
      id:124,
      name:'Raj',
      age:26,
    })
  }

  const authorize = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => alert('success')).catch((error) => console.log(error))
  }
  return (
    <>
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
      <button onClick={authorize}>
        submit
      </button>
    <SignUp/>
    </>
  )
}

export default App
