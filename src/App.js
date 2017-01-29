import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header,Footer } from './components/index';
import 'antd/dist/antd.css';
import './assets/styles/index.css';


class App extends Component {
  render() {
    return (
      <div >
        <Header />{/*头部*/}
         <div className='main'>{/*内容区开始*/}
          { this.props.children }
         </div>{/*内容区结束始*/}
        <Footer />{/*底部*/}
      </div>
    );
  }
}

export default connect(function(state){
   console.log(state);
   return {
     lists:state.lists,
     items:state.items
   }
})(App);
