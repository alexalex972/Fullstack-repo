import React, { Component } from 'react';
import './App.css';
class App extends Component {

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.inputRef1 = React.createRef();
    this.state = { f1: 0, f2: 0, r:0 };
    this.sum = () => {
      this.setState({
        r: this.state.f1 + this.state.f2
      });
    };
    this.onChange = (name) => (event) =>{
      this.setState({
        [name]: +(event.target.value)
      });
    }
  }

  render() {
    return (
      <div>
       <input value={this.state.f1} onChange={this.onChange('f1')} />
        +
        <input value={this.state.f2} onChange={this.onChange('f2')} />
        <button onClick={this.sum}> = </button>
        <span>Value: {this.state.r}</span>
      </div>
    );
  }
}

export default App;


