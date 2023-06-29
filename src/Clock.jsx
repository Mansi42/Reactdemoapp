import React from 'react';
import { ReactDOM } from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
      console.log("did")
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
      console.log("will")
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
      console.log("tick")
     
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  


  export default Clock;