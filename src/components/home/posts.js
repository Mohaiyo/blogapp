import React,{ Component } from 'react';
import { Link } from 'react-router';
class Posts extends Component{
	render(){
		return(
			<div className='mainLeft line_paper mb20 shadow sticker'>
				<h3><Link className='postTitle' to="#">Online Marketing Hype A-Z</Link></h3>
				<div className='arc_meta'>
					<time className='metaItem'>April-05-2016</time>
				</div>
				<div className='arc_cont'>
					<p>
					To create your first blog post, click here and select 'Manage Posts' > New Post. Blogs are a great way to connect with your audience and keep them coming back. To really engage your site visitors we suggest you blog about subjects that are related to your site or business. Blogging is also really good for SEO, so we recommend including keywords that related to your site within your posts. Good Luck!
					</p>
				</div>
				<div className='tar'>
						<a href="#" className='paper btn paper_purple'>Read More</a>
				</div>
			</div>
		)
	}
}
export default Posts;