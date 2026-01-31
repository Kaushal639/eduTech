import React, { useState } from 'react';
import './loginform.css';
import { LocalStorage, GetData } from '../localstorage/localstorage.jsx';
import { Link } from 'react-router-dom';
import Signupform from '../components/signupform/signup.jsx';
function Loginform({ onSignup }){
    
    const [Useremail, setUseremail] = useState('');
    const [Password, setPassword] = useState('');
    function handleLogin(e){
        e.preventDefault();
        console.log("Useremail:", Useremail);
        console.log("Password:", Password);
        

        const storedData = JSON.parse(localStorage.getItem('users'));
        const user = storedData.find(u => u.email === Useremail && u.password === Password);
        if (user) {
            alert('Login successful!');
        } else {
            alert('Invalid credentials');
        }
    }
   React.useEffect(()=>{
     LocalStorage();
   }, [])
   React.useEffect(()=>{
    GetData();
   }, [])
   function SignupClick(){
    alert("Redirecting to Signup Page");
}
   

    return(<>
    <div className="main-login-form">
        <div className="login-form">
        <div className="username">
            <input onChange={(e)=> setUseremail(e.target.value)} type="email" placeholder="Email" />
        </div>
        <div className="password">
            <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
        </div>
        <div className="login-button">
            <button onClick={handleLogin}>Login</button>
            </div>
            <div className="signup-button">
                <button onClick={onSignup}><Link to='/login/signup'>Sign up</Link></button>
            </div>
        </div></div>
        </>)
      }
export default Loginform;



















































