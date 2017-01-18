import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Addnum,Deletenum } from './redux/action/action';

class App extends Component {
  handleaddnum(){
    const data =this.props.lists;
    console.log(data);
    const listValue=data.value;
    console.log(listValue);
    this.props.dispatch(Addnum(listValue));

  }
  handleadeletenum(){
    const data =this.props.lists;
    console.log(data);
    const listValue=data.value;
    this.props.dispatch(Deletenum(listValue));

  }

  render() {
    const data = this.props.lists;
    return (
      <div>
        <span> Clicked:{ data.value } times</span>
        <button onClick={this.handleaddnum.bind(this)}> + </button>
        <button onClick={this.handleadeletenum.bind(this)}> - </button>
      </div>
    );
  }
}

export default connect(function(state){
  console.log(state);
  return{
    lists:state.lists
  }
})(App);
