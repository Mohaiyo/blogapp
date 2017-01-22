import assign from 'object-assign';
import { DELETE_NAME,ADD_NAME } from '../action/constants';

const initState = {
	  loading:false,
	  name:[],
	  deletename:[],  // 被删除的名字
	  age:null,
	  sex:null,
	  isaddname:false
}

function lists(state=initState,action){
	
   switch(action.type){
   	case DELETE_NAME:
        return assign({},state,{
        	 deletename:action.name
        })
      case ADD_NAME:
        return assign({},state,{
        	  name:action.name
        })
      case 'CHANGE_NAME_YET':
        return assign({},state,{
        	  isaddname:action.isaddname
        })
      default:
        return state;
   }
}

export default lists;
