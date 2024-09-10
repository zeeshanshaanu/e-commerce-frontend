import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // 
    useEffect(() => {
        const auth = localStorage.getItem("user")
        if (auth) {
            navigate("/")
        }
    }, [])

    const registerUser = async () => {
        let result = await fetch("http://localhost:5000/register", {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": "application/json"
            },
        });
        result = await result.json()
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result))
        if (result) {
            navigate("/")
        }
    }



    return (
        <div className='signUp'>
            <center>
                <h4>Register</h4>
                <input className="inputBox" type="text" placeholder='Enter Name' value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input className="inputBox" type="email" placeholder='Enter email' value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input className="inputBox" type="password" placeholder='Enter Password' value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='button' className='appButton' onClick={registerUser}>Sign up</button>
            </center>
        </div>
    )
}

export default Signup
