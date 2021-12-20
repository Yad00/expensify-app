import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from './PrivateRoute';
import PublicRoute from "./PublicRoute";

const AppRouter = () => (
    <Router>
        <div>
            <Routes>
                <Route exact path="/" element={<PublicRoute><LoginPage /></PublicRoute>} />
                <Route exact path="/dashboard" element={<PrivateRoute><ExpenseDashboardPage /></PrivateRoute>}/>
                <Route exact path="/create" element={<PrivateRoute><AddExpensePage /></PrivateRoute>} />
                <Route exact path="/edit/:id" element={<PrivateRoute><EditExpensePage /></PrivateRoute>} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </Router>
);

export default AppRouter;