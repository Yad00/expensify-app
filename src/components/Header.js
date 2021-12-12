import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => (
        <header>
            <h1>Expensify</h1>
            <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Dashboard</NavLink>
            <NavLink to="/create" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Create Expense</NavLink>
        </header>
);

export default Header;

// <NavLink to="/help" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Help</NavLink>