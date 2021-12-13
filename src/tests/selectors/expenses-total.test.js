import selecExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const res = selecExpensesTotal([]);
    expect(res).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const res = selecExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('Should correctly add up multiple expense', () => {
    const res = selecExpensesTotal(expenses);
    expect(res).toBe(114195);
});