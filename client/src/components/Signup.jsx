import { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

const Signup = () =>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:4000/register',{name,email,password})
        .then(result => {
            console.log(result.data);
            navigate("/");
        })
        .catch(err => console.log(err));
    }
    return (
    <div class="container">
        <div class="login-form">
            <h1 class="login-name">Sign up</h1>
            <form action="#" method="post" onSubmit={handleSubmit} >
                <p>User Name</p>
                <input type ="text" name="username" placeholder="Enter the Username" onChange={(e) => setName(e.target.value)} required/>
                <p>Email </p>
                <input type ="text" name="email" placeholder="Enter the email" onChange={(e) => setEmail(e.target.value)} required/>
                <p>Password</p>
                <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <br/>
                <button type="submit" class="btn-login" >Signup</button>
                
            </form>
        </div>
    </div>
    )
};
export default Signup;