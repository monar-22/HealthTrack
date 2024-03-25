import { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router';
import axios from 'axios';

const Login = () =>{
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(email==="admin@gmail.com" && password === "admin@123") navigate("/admin");
        else{
    axios.post('http://localhost:4000/login',{email,password})
    .then(result => {
      console.log(result.data)
      if(result.data){
        localStorage.setItem('user',JSON.stringify(result.data));
        navigate('/home');
      } 
    } )
    .catch(err => console.log(err));
    }
    setEmail('');
    setPassword('');
    }

    return (
    <div className="container">
        <div className="login-form">
            <h1 className="login-name">Login Form</h1>
            <form onSubmit={handleSubmit} >
                <p>Email </p>
                <input type ="text" name="user" placeholder="Enter the email"  onChange={(e) => setEmail(e.target.value)} required />
                <p>Password</p>
                <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <br/>
                <button type="submit" className="btn-login">login</button>
                <div className="signupdiv">
                    Don't have an account?
                    <a className="btn1" href="/signup" >signup</a>
                </div>
            </form>
        </div>
    </div>
        
    )
};

export default Login;