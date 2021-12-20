import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from './PrivateRoute';

const AppRouter = () => (
    <Router>
        <div>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route exact path="/dashboard" element={<PrivateRoute><ExpenseDashboardPage /></PrivateRoute>}/>
                <Route exact path="/create" element={<PrivateRoute><AddExpensePage /></PrivateRoute>} />
                <Route exact path="/edit/:id" element={<PrivateRoute><EditExpensePage /></PrivateRoute>} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </Router>
);

export default AppRouter;

// const AppRouter = () => (
//     <Router>
//         <div>
//             <Header/>
//             <Routes>
//                 <Route exact path="/" element={<LoginPage />} />
//                 <Route exact path="/dashboard" element={<PrivateRoute />}>
//                     <Route element={<ExpenseDashboardPage />} />
//                 </Route>
//                 <Route exact path="/create" element={<PrivateRoute />}>
//                     <Route element={<AddExpensePage />} />
//                 </Route>
//                 <Route exact path="/edit/:id" element={<PrivateRoute />}>
//                     <Route element={<EditExpensePage />} />
//                 </Route>
//                 <Route path="/help" element={<HelpPage />} />
//                 <Route path="*" element={<NotFoundPage />} />
//             </Routes>
//         </div>
//     </Router>
// );