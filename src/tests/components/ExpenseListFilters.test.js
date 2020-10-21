import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper;

beforeEach(() => {
    setTextFilterSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    wrapper = shallow(<ExpenseListFilters filters={filters} setTextFilter={setTextFilterSpy} sortByAmount={sortByAmountSpy} sortByDate={sortByDateSpy} setStartDate={setStartDateSpy} setEndDate={setEndDateSpy} />);
});

test('Should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with alternate data correctly', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
});

test('Should filter text on input change', () => {
    const value = 'e';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilterSpy).toHaveBeenCalledWith(value);
});

test('Should sort by date', () => {
    wrapper.setProps({ filters: altFilters });
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDateSpy).toHaveBeenCalled();
});

test('Should sort by date', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmountSpy).toHaveBeenCalled();
});

test('Should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDateSpy).toHaveBeenCalledWith(startDate);
    expect(setEndDateSpy).toHaveBeenCalledWith(endDate);
});

test('Should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});