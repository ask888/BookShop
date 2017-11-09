import { combineReducers } from 'redux';
import books from './books';
import watchedBooks from './watchedBooks';


import category from './category';
import inbasket from './inbasket';
import search from './search';
import filter from './filter';
import sidebar from './sidebar';
import bought from './bought';
import api from './api';
import notify from './notify';
import stick from './stick';


const reducers = combineReducers({
    books,
    inbasket,
    category,
    search,
    filter,
    sidebar,
    watchedBooks, 
    api,
    notify,
    bought,
    stick
});

export default reducers;