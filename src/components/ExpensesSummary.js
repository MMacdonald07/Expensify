import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesSum from '../selectors/expenses-total';
import numeral from 'numeral';
import 'numeral/locales/en-gb';

numeral.locale('en-gb');

export const ExpensesSummary = (props) => {
	const expenseCount = props.expenses.length;
	const expenseTotal = expensesSum(props.expenses);
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
	return (
		<div>
			<h1>
				Viewing {expenseCount} {expenseWord} totalling {numeral(expenseTotal).format('$0,0.00')}
			</h1>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters),
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
