import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // 
    // useEffect(() => {
    //     const auth = localStorage.getItem("user")
    //     if (auth) {
    //         navigate("/")
    //     }
    // }, [])

    const LoginUser = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            },
        });
        result = await result.json()
        console.log(result);
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result))
            navigate("/")
        }
        else {
            alert("Please enter valid credantials.")
        }
    }



    return (
        <div className='signUp'>
            <center>
                <h4>Login</h4>

                <input className="inputBox" type="email" placeholder='Enter email' value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input className="inputBox" type="password" placeholder='Enter Password' value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='button' className='appButton' onClick={LoginUser}>Login</button>
            </center>
        </div>
    )
}

export default Login
