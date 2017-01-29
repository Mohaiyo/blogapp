import React,{ Component } from 'react';
import { Link } from 'react-router';

class RecentPosts extends Component{
	render(){
		return(
			<div>
				<p className='mainRight card'>RecentPosts</p>
				<div ><Link to="#">Online Marketing Hype A-Z</Link></div>
				<div ><Link to="#">5 Powerful Tools For B2B Sales Managment</Link></div>
				<div><Link to="#">Make Your To-Do List Actually Doable</Link></div>
				<div><Link to="#">Why Success is About Action</Link></div>
				<div><Link to="#">How to Set Yourself Apart Through Brand and Design</Link></div>
				<div><Link to="#">The Ultimate Consulting Landing Page</Link></div>
			</div>
			)
	}
};

export default RecentPosts;
