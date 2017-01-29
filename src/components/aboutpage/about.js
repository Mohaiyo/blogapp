import React,{ Component } from 'react';
import { Timeline } from 'antd';

class About extends Component{
	render(){
		return(
			<div className='about'>
			<div className="article-content">
				<h3 className="about-title">关于作者</h3>
				<div className="flex-item"><div className="flex-label">姓名:</div> 
				<div className="flex-content">林岑影</div>
			 </div>
			 <div className="flex-item">
				<div className="flex-label">年龄:</div>
				<div className="flex-content">1987.09</div>
			 </div>
			 <div className="flex-item">
			 <div className="flex-label">职业:</div>
			  <div className="flex-content">前端开发</div>
			  </div> <div className="flex-item">
			  <div className="flex-label">Github:</div>
			   <div className="flex-content">
			   <a href="https://github.com/lincenying" target="_blank">@lincenying</a>
			   </div>
			   </div>
			   <div className="flex-item">
			   <div className="flex-label">技能:</div>
			    <div className="flex-content">
			    <ul className="about-ul">
			    <li>HTML5 + CSS3</li>
			     <li>NodeJS</li> 
			     <li>React</li> 
			     <li>Vue</li> <li>ES6</li> 
			     <li>Gulp</li>
			      <li>WebPack</li>
			       <li>jQuery</li>
			    </ul>
			    </div>
			    </div>
			     <h3 class="about-title">关于网站</h3>
			      <p>本站服务端采用 express + mongoDB 搭建, 客户端采用 Vue2 的服务端渲染搭建</p>
			       <p>网站分成前台和后台, 前台采用 SSR 模式渲染, 后台采用 SPA 模式</p> 
			       <p>主要功能包括: 管理员, 用户, 分类, 文章, 评论, 文章点赞</p> 
			       <p>主要技术栈: express, mongoose, vue2, vue2-router, vuex, webpack, babel, eslint</p>
			       </div>
				<Timeline>
			    	<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
				    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
				    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
				    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
			  	</Timeline>
			</div>
			)
	}
}
export default About;