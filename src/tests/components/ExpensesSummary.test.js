import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpensesSummary";

test('Should correctly render expenses summary with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>)
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render expenses summary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={234234213}/>)
    expect(wrapper).toMatchSnapshot();
});