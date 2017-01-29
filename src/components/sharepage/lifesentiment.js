import React,{ Component } from 'react';
import Posts from '../home/posts';
import RecentPosts from './RecentPosts';

class LifeSentiment extends Component{
	render(){
		return(
			<div className='main'>
				<div>
					<Posts />
					<Posts />
					<Posts />
				</div>
				<RecentPosts />
			</div>
			)
	}
}
export default LifeSentiment;