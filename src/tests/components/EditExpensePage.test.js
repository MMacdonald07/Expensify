import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper;

beforeEach(() => {
	editExpenseSpy = jest.fn();
	startRemoveExpenseSpy = jest.fn();
	historySpy = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			editExpense={editExpenseSpy}
			history={historySpy}
			startRemoveExpense={startRemoveExpenseSpy}
			expense={expenses[2]}
		/>
	);
});

test('Should render EditExpensePage correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
	expect(historySpy.push).toHaveBeenLastCalledWith('/');
	expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('Should handle removeExpense', () => {
	wrapper.find('button').simulate('click');
	expect(historySpy.push).toHaveBeenLastCalledWith('/');
	expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[2].id });
});
