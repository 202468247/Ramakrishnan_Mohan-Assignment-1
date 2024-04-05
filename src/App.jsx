import { useEffect, useState } from 'react'
import ReactDOM from "react-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './get-user'
import { checkLogin } from './get-user'

function App() {
  const [loginMessage, setloginMessage] = useState('')

  useEffect(() => {
    //loginMessage === ''//setloginMessage(checkLogin('Solar331','M1234'))
  }, [])

  return (
    <>
     
      <div className="card">
        <label size="10">User Name: </label>
        <input type="text" id="userName" size="10"></input>
        <label size="10">  Password:   </label>
        <input type="text" id="passWord" size="10"></input>
        <button onClick={() => setloginMessage(checkLogin(document.getElementById('userName').value,document.getElementById('passWord').value))} size="100px">Login</button>
        <label id="LoginErrMsg">{loginMessage}</label>
      </div>
     
    </>
  )
}

export default App
