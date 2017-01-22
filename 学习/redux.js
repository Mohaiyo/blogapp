 
 /*   react-redux 简易教程

  一 redux开发流程

   1, 新建constant文件，在constant文件里面定义各种action的type，以便集中管理action

   2, 新建action文件，定义各种action，其中的type统一从constant里面获取

   3, 使用store的dispatch方法发送action

   4, reducer接受action, 并做遍历处理，提取action中新的state，覆盖或重新定义旧的state, 得到全新的state

   5, 新建store文件，将所有的reducer合并成一个配置对象，传递给combineReducers方法, 得到一个全新的reducer集合,这个state里面包含了总的全新的state集合

   6, 使用createStore创建store, 传入reducer集合，以及一些需要的中间件

   7, 调用store的subscribe监听方法，在这个方法里，可以通过store.getState()获取到全新的state集合，做一些处理

   8, 通过6 7两步，已经得到了一个全新的store，其中包含了全新的state集合，再通过根路由即可传递给相应的组件

   9, 组件调用redux的conect方法和store建立连接，并从store中得到新的state，从state拿到想要的数据，再做渲染等处理
    

  二  redux三大组成部分 
    
    1, action : 负责收集用户行为，发送动作

    2，reducer ： 负责处理action，将新的state覆盖旧的state，并传递给store

    3，store ：负责管理存储state，并通过路由传递给组件


  三  action

    1，组成：action是一个纯函数，它返回一个todo对象; 通常需要一个constants文件来集中管理action类型 

    2，constants:  
       (1) 使用常量定义action类型
      （2）action类型需具备可读性，直观性
      例如 constants.js文件如下：
        export const DELETE_NAME='app/src/list/DELETE/NAME'; 

        解析： app/src/list下的删除动作，用于删除某个name

    3, 如何定义action
      (1) 引用constants中定义的action类型   import { DELETE_NAME }='./constants';
      (2) 定义纯函数  export function DeleteName(){ …… }
      (3) 返回todo对象 
       export function DeleteName(name){ 
         return {
	         type: DELETE_NAME,
	         name
         }
      }

     : 至此一个名为DeleteName的action就定义好了

    4, 如何发送action

      (1) 找到dispatch方法  通常通过this.props.dispatch获取到
      (2) 调用dispatch方法发送action
        this.props.dispatch(DeleteName)    // 发送DeleteName这个动作
        或
        this.props.dispatch({
	         type: DELETE_NAME,
	         name
         })  // 不需要提前定义action，而是在定义时调用 （不推荐）
 
      : 至此，action部分已完成


  四，reducer
   
   1, 两部分组成：
     (1) 初始initState对象, 用于初始化;
     (2) reducer(state,action)函数，用于组织新的state

   2, 如何使用reducer

   (1) 定义initState 比如:
     const initState={
     	  loading:false,
	     name:null,
	     age:null,
	     sex:null
     }

   (2)，定义reducer函数组织新的state   //  reducer(旧的或初始化的state,action)

    例如: 定义一个名为lists的reducer函数,用于组织新的state   

    function lists(state=initState,action){  // state=initState表示当state不存在时，这里等于initState，通常是初始化的时候
	    switch(action.type){
	      case DELETE_NAME :

	      case 
	    }
    }











 */