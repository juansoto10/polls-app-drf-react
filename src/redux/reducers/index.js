import { combineReducers } from 'redux';
import polls from './polls';
import categories from './categories';

export default combineReducers({
    polls,
    categories
})
