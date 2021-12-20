import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';

export const LoginPage = ({ startLogin }) => {
    let location = useLocation();
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => {
                startLogin();
                auth.onAuthStateChanged((user) => {
                    if (user) {
                        if (location.pathname === '/') {
                            navigate('/dashboard');
                        }
                    }
                });
            }}>Login</button>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);