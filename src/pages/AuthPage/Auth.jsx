import './Auth.css'
import SignUpForm from '../../components/AuthComponent/SignUpForm/SignUpForm';
import LoginForm from '../../components/AuthComponent/LoginForm/LoginForm'
import { useState,  } from 'react';


export default function AuthPage({ setUser, redirect }) {
  const [showLogin, setShowLogin] = useState(true);
  

  return (
    <main className="auth-page">
      <div className="auth-content-container">
        <h1 className="getting-started">Getting Started</h1>
        <br />
        <button className="auth-toggle-button" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
        <p className="auth-p" >Create an account or Login to make purchases and view your order history</p>
        { showLogin ?
          <LoginForm setUser={setUser} redirect={redirect}/>
          :
          <SignUpForm setUser={setUser} redirect={redirect}/>
        }
      </div>
    </main>
  );
}