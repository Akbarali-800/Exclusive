import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ wishlist, cart }) => {
    return (
        <nav className="navbar">
            <h1 className="logo">Exclusive</h1>

            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>

                <li className="dropdown">
                    <span className="dropdown-title">More ▼</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/products">History</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                    </ul>
                </li>



                <li><Link to="/wishlist"> ♡ ({wishlist.length})</Link></li>
                <li><Link to="/cart"> 🛒 ({cart.length})</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
