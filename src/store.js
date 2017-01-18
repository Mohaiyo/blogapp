/*
* @Author: Administrator
* @Date:   2017-01-17 22:22:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-01-18 08:51:24
*/
import { createStore,combineReducers } from 'redux';
import listReducer from './redux/reducer/lists';

const reducers = combineReducers({
	lists:listReducer
});
const store = createStore(
	reducers,
);

store.subscribe(() => {
})

export default store;

