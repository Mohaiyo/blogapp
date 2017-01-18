/*
* @Author: Administrator
* @Date:   2017-01-17 21:05:39
* @Last Modified by:   Administrator
* @Last Modified time: 2017-01-18 09:00:56
*/
// 新建action文件，定义各种action，其中的type统一从constant里面获取
import { ADD_NUM,DELETE_NUM } from './constant';

export function Addnum(listValue){
	return{
		type:ADD_NUM,
		listValue
	}
}

export function Deletenum(listValue){
	return{
		type:DELETE_NUM,
		listValue
	}
}