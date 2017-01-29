/*
* @Author: Administrator
* @Date:   2017-01-23 13:06:27
* @Last Modified by:   Administrator
* @Last Modified time: 2017-01-28 18:06:10
*/
import React,{ Component } from 'react';
import Sidebar from './sidebar';
import Posts from '../home/posts'
class Main extends Component{
	render(){
		return(
			<div className='main Grid '>
				<div className='mainLeft Grid-cell'>
					<Posts />
					<Posts />
					<Posts />
				</div>
				<Sidebar />
			</div>
		)
	}
};

export default Main;