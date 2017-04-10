import React, { Component } from 'react';
import Header from '../../components/Header'
import styles from './App.css'

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
        <h1 className={styles.title}>Hello sarah!!!!!!</h1>
        <div>{this.state.counter}</div>
        <button className={styles.button} onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default App
