import { useState } from 'react'
import ReactDOM from "react-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './get-user'
import { checkLogin } from './get-user'

function App() {
  const [userName, setUserName] = useState('Solar331')
  const [passWord, setPassword] = useState('M1234')

  return (
    <>
     
      <div className="card">
        <label size="10">User Name: </label>
        <input type="text" name="userName" size="10"></input>
        <label size="10">  Password:   </label>
        <input type="text" name="passWord" size="10"></input>
        <button onClick={(checkLogin('Solar331','M1234'))} size="100px">Login</button>
        <label id="LoginErrMsg">{(checkLogin('Solar331','M1234'))}</label>
      </div>
     
    </>
  )
}

export default App
