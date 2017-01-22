import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeleteName,AddName } from './redux/action/action';
import { Header,Footer,Sidebar } from './components/index';
import 'antd/dist/antd.css';

class App extends Component {
 
 state={
   changename:null,  // 定义初始的state
 }

 handdleaddname(name){
   const data = this.props.lists;
   console.log(data);
   const listname = data.name;
   listname.push(name);
   this.props.dispatch(AddName(listname));
 }
 handdledeletename(name){
   const data = this.props.lists;
   const listname = data.deletename;
   listname.push(name);
   this.props.dispatch(DeleteName(listname));
 }
 changeName(name){
   this.setState({
      changename:name
   })
 }
  render() {
    const data = this.props.lists;
    return (
      <div >
        <Header />
         <div>
          { this.props.children } 
          <Sidebar />
         </div>
        <Footer />
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
