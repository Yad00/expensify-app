import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';

export const LoginPage = ({ startLogin }) => {
    let location = useLocation();
    const navigate = useNavigate();
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify</h1>
                <p>Its time to get your expenses under control.</p>
                <button className="button" onClick={() => {
                    startLogin();
                    auth.onAuthStateChanged((user) => {
                        if (user) {
                            if (location.pathname === '/') {
                                navigate('/dashboard');
                            }
                        }
                    });
                }}>Login with Google</button>
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);