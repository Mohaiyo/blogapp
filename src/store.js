import { createStore, combineReducers } from 'redux';
import listReducer from './redux/reducer/lists';
import itemReducer from './redux/reducer/items';

// 合并所有的reducer到state
const reducers = combineReducers({
	lists:listReducer,
	items:itemReducer
});

// 创建store
const store = createStore(
	reducers,
);

// 监听state的变化
store.subscribe(() => { 
  const state = store.getState();
  const name=state.lists.name;
  const isaddname=state.lists.isaddname;
  if(name.length>0&&isaddname===false){
  	console.log(name);
  	 store.dispatch({
  	 	type:'CHANGE_NAME_YET',
      isaddname: true
  	 });
  }
  // store监听器
})

export default store;  // 暴露store
