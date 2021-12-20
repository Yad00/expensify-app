import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => {
    const navigate = useNavigate();
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink to="/dashboard" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Dashboard</NavLink>
            <NavLink to="/create" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Create Expense</NavLink>
            <button onClick={() => {
                startLogout();
                navigate('/');
            }}>Logout</button>
        </header>
)};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);