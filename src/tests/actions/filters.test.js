import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('Should setup setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('Should setup setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});

test('Should setup sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('Should setup sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Should setup setTextFilter action object with text value', () => {
    const action = setTextFilter('Bob');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Bob'
    });
});

test('Should setup setTextFilter action object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});