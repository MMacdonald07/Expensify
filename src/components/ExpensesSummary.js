import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
		<div className='page-header'>
			<div className='content-container'>
				<h1 className='page-header__title'>
					Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{numeral(expenseTotal).format('$0,0.00')}</span>
				</h1>
				<div className='page-header__actions'>
					<Link className='button' to='/create'>
						Add Expense
					</Link>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
