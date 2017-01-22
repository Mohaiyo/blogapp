 // 定义action的文件
import { DELETE_NAME,ADD_NAME } from './constants';

export function DeleteName(name){  
  return {
   type: DELETE_NAME,
   name
  }
}

export function AddName(name){  
  return {
   type: ADD_NAME,
   name
  }
}

