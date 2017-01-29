import React,{ Component } from 'react';
import { Card } from 'antd';
class Sidebar extends Component{
	render(){
		return(
			<div className='mainRight Grid-cell .u-1of2'>
				<Card title="React">
			      <p>3篇文章</p>
			    </Card>
			    <Card title="React">
			      <p>3篇文章</p>
			    </Card>
			    <Card title="React">
			      <p>3篇文章</p>
			    </Card>
			    <Card title="React">
			      <p>3篇文章</p>
			    </Card>
			    <Card title="React">
			      <p>3篇文章</p>
			    </Card>
			</div>
			)
	}
}
export default Sidebar;