import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate  } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const expense = props.expenses.find((expense) => expense.id === id);
    
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    expense={expense}
                    onSubmit={(expense) => {
                        props.dispatch(startEditExpense(id, expense));
                        navigate('/');
                    }}
                />
                <button className="button button--secondary" onClick={() => {
                    props.dispatch(startRemoveExpense({ id }));
                    navigate('/');
                }}>Remove Expense</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

export default connect(mapStateToProps)(EditExpensePage);