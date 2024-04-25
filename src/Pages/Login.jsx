import React, { useState } from 'react';
import {userData} from '../Data/user.jsx'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState('');
  //const navigate = useNavigate();
  
  const handleLogin = () => {
    
    const newArray = userData.filter(element => element.userName == username)

    if (newArray.length) {
      if (username === newArray[0].userName && password === newArray[0].passWord) {
        setLoggedIn(true);
        setName(newArray[0].firstName)
        localStorage.setItem('MY-loggedIn', loggedIn);
        localStorage.setItem('MY-name', name)
      } else {
        alert('Invalid password');
      }    
    }
    else {
      alert('Invalid username');
    };
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    localStorage.removeItem('MY-loggedIn')
    localStorage.removeItem('MY-name')
  };

  const goSelecteItems = () => {    
    console.log('test3')
    return (
      <main className="mainsection">
        <main1>
          <h2>Welcome to Select Items{name}!</h2>
        </main1>
      </main>      
    );
  };

  if (loggedIn) {
    return (
      <main className="mainsection">
          <main2>
                <img id="Login1" src="/Images/Login1.jpg" alt="Image of Percentage conversion of service referrals" height="400px"/>
            </main2>
        <main1>
          <h2>Welcome, {name}!</h2>
          <button onClick={goSelecteItems}>
            <img src="/images/Continue3.png" width="100px" height="100px"></img>
          </button>
          <br></br>
          <button onClick={handleLogout}>Logout</button>
          
        </main1>
        <main2>
                <img id="Login1" src="/Images/Login1.jpg" alt="Image of Percentage conversion of service referrals" height="400px"/>
            </main2>
      </main>
    );
  } else {
    return (
      <main className="mainsection">
            <main2>
                <img id="Login1" src="/Images/Login1.jpg" alt="Image of Percentage conversion of service referrals" height="400px"/>
            </main2>
            <main1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
       <br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
        </main1>
          <main2>
                <img id="Login1" src="/Images/Login1.jpg" alt="Image of Percentage conversion of service referrals" height="400px"/>
            </main2>
      </main>
    );
  }
};

export default Login;