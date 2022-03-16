import './Auth.css'
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState,  } from 'react';


export default function AuthPage({ setUser, redirect }) {
  const [showLogin, setShowLogin] = useState(true);
  

  return (
    <main>
      <h1>Getting Started</h1>
      <br />
      <button className="btn btn-light" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
      <p className="auth-p" >Create an account or Login to make purchases and view your order history</p>
      { showLogin ?
        <LoginForm setUser={setUser} redirect={redirect}/>
        :
        <SignUpForm setUser={setUser} redirect={redirect}/>
      }
    </main>
  );
}