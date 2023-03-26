import React, { Component } from 'react'

class AgeCounterCheck extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        counter:0
    }
    this.age = 66;
  }
  clickIncrement(){
    this.setState({counter:this.state.counter+1,age:this.age+1});
  }

  render() {
    return (
      <div>
        AgeCounterCheck
        <button onClick={()=>this.clickIncrement()}> Click</button>
        <p>Counter : {this.state.counter}</p>
        //this is not the appropriate way to display the age or handle the age but we will not getloaded
        any error
        <p>Age : {this.state.age}</p>
      </div>
    )
  }
}

export default AgeCounterCheck;
