import React,{ Component } from 'react';
import { Link } from 'react-router';
import { Menu } from 'antd';
class Header extends Component{
	render(){
		return(
			<Menu theme='dark' mode='horizontal'  style={{}}>
			  <Menu.Item><Link to='/'>首页</Link></Menu.Item>
			  <Menu.Item><Link to='/trending'>热门</Link></Menu.Item>
			  <Menu.Item><Link to='/about'>关于</Link></Menu.Item>
			</Menu>
			)
	}
}
export default Header;