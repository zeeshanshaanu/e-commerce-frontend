import React from 'react'
import { Link, useNavigate, } from "react-router-dom";

const Navbar = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();

    const logout = () => {
        console.log("apple");
        localStorage.clear();
        navigate("/signup");

    }

    return (
        <div>
            <div className="">
                <img src="data:image/png;base64,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" 
                alt="logo" className='Product-logo' />
            </div>
            {auth ?
                <ul className='nav-ul'>
                    <li><Link to="/Products">Product</Link></li>
                    <li><Link to="/AddProduct">Add Product</Link></li>
                    <li><Link to="/UpdateProduct">Update Product</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                    <li style={{ marginLeft: "10rem" }}><Link to="/Signup" onClick={logout}>Logout&nbsp;({JSON.parse(auth).name})</Link></li>
                </ul> :
                <ul className='nav-ul nav-right'>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Signup">Sign Up</Link></li>
                </ul>

            }
        </div>
    )
}

export default Navbar
