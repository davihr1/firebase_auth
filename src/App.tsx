import React, { useState } from 'react';
import logo from './logo.svg';
import * as FirebaseContoller from "./components/FirebaseController";
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onSignin() {
    try {
      await FirebaseContoller.handleSignin( {email, password} )
      .then(() => {
          alert('sucessful')
      })
    } catch (error) {
      console.error(error)
      alert('ALgo deu errado')
    }  
  }

  async function onSignup() {
    try {
      await FirebaseContoller.handleSignup( {email, password} )
      .then(() => {
          alert('created sucessful')
      })
    } catch (error) {
      console.error(error)
      alert('ALgo deu errado')
    } 
  }
  function onResetPass() {
    return
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='inputs'>
          <h1>{email}</h1>
          <input type='email' placeholder='email' onChange={e => setEmail(e.target.value)}/>
          <br/>
          <input type='password' placeholder='senha' onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className="buttons">
        <button onClick={onSignin}>Sign in</button>
        <button onClick={onSignup}>Sign up</button>
        <button onClick={onResetPass}>Reset pass</button>
        </div>
      </header>
    </div>
  );
}

export default App;
