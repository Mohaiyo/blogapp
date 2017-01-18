/*
* @Author: Administrator
* @Date:   2017-01-17 21:09:04
* @Last Modified by:   Administrator
* @Last Modified time: 2017-01-18 09:01:31
*/
import { ADD_NUM,DELETE_NUM } from '../action/constant';
import assign from 'object-assign';

const initState={
	value:0
}

function lists(state=initState,action){

	switch(action.type){
		case ADD_NUM:
		return assign({},state,{
			value:action.listValue+1
		})
		case DELETE_NUM:
		return assign ({},state,{
			value:action.listValue-1
		})
		default:
		return state;
	}
}

export default lists;
