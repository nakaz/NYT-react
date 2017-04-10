import React, { Component } from 'react';
import Header from '../../components/Header'

class App extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }

    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState({counter: this.state.counter+10})
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Hello sarah!!!!!!</h1>
        <div>{this.state.counter}</div>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default App
