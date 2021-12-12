import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate  } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const expense = props.expenses.find((expense) => expense.id === id);
    
    return (
        <div>
            <ExpenseForm
                expense={expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(id, expense));
                    navigate('/');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({ id }));
                navigate('/');
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

export default connect(mapStateToProps)(EditExpensePage);