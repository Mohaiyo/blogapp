import React,{ Component } from 'react';
import { Link } from 'react-router';
import { Menu,Input  } from 'antd';
const Search = Input.Search;
class Header extends Component{
	render(){
		return(
			<Menu theme='dark' mode='horizontal' className='Nav'>
				<span className="icon-nav-logo">Ohaiyo</span>
			  	<Menu.Item className='NavItems'><Link to='/'>前端知识</Link></Menu.Item>
			  	<Menu.Item className='NavItems'><Link to='/lifesentiment'>生活感悟</Link></Menu.Item>
			  	<Menu.Item className='NavItems'><Link to='/about'>关于我</Link></Menu.Item>
			  	<Search className='SearchItem'
			    placeholder="记得按回车键喔"
			    style={{ width: 180 }}
			    onSearch={value => console.log(value)}
			 	 />
			 	 <Link to='/user/signin' className='SignIn'>LOG IN</Link>
			 	 <Link to='/user/signup' className='SignUp'>SIGN UP</Link>
			</Menu>
		)
	}
}
export default Header;