import assign from 'object-assign';
import { LOAD_DATA,DELETE_DATA } from '../action/constants';

const initState = {
	 data:[],
   loading:false,
   ischange: false
}

function items(state=initState,action){
	
   switch(action.type){
   	case LOAD_DATA:
        return assign({},state,{
        	 deletename:action.name
        })
      case DELETE_DATA:
        return assign({},state,{
        	  name:action.name
        })
      default:
        return state;
   }
}

export default items;
