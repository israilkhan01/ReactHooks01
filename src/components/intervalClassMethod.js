import React from 'react'

export default class intervalClassMethod extends React.Component{

 constructor(){
  super()
    this.state = {
        count:0
    }
 }
    counterfun = ()=>{
    this.setState({
     count:this.state.count+1
    })
    }
    componentDidMount(){
      setInterval(this.counterfun,1000)
    }
    componentWillUnmount(){
      clearInterval(this.counterfun)
    }

  render() {
    return (
      <div>
        <h1>
          {this.state.count}
        </h1>
        </div>
    )
  }
}
