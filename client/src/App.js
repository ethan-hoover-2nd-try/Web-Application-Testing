import React, {Component} from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state= {
      strikes: 0,
      balls: 0
    }
  }

  resetStats = () => {
    this.setState({
      strikes: 0,
      balls: 0
    });
  }

  componentDidUpdate = () => {
    if(this.state.balls === 4 || this.state.strikes === 3) {
      this.resetStats();
    }
  }

  hit = () => this.resetStats();
  addBall = () => this.setState({balls: this.state.balls + 1});
  addFoul = () => this.state.strikes < 2 ? this.setState({strikes: this.state.strikes + 1}) : null;
  addStrike = () => this.setState({strikes: this.state.strikes + 1});

  render() {
    return (
      <div className='App'>
        <h1>Baseball Dashboard</h1>
        <Display {...this.state}/>
        <Dashboard hit={this.hit} addBall={this.addBall} addFoul={this.addFoul} addStrike={this.addStrike}/>
      </div>
    );
  }
}

export default App;
