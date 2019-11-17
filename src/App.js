import React, {Component} from 'react'
import './App.css';
import Grid from './components/Grid';

class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       generations: 0
    }
  }
  

  render() {
    return (
      <div>
        < h1 > Conway 's Game of Life</h1>
        <Grid/>
        <h2>Generations: {this.state.generations}</h2>
      </div>
    )
  }
}

export default App;
