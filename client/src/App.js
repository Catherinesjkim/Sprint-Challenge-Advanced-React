// 1. Class component that fetches data from the server you now have running - the data can be fetched from `http://localhost:5000/api/players`
// 2. Display the player data you receive from the API

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Players from './components/Players';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }

    componentDidMount() {
      fetch('http://localhost:5000/api/players')
      .then(response => response.json())
      .then(data => this.setState({ ...this.state, data: data }))
    }

    render () {
      return (
        <div className="App" data-testide="toggle">
          <Navbar />
          <div className="header">
            <h1>Players</h1>
          </div>
          <div>
            {this.state.data.map(info => {

              return (
                <Players 
                name={info.name}
                country={info.country}
                searches={info.searches}
                />
              )
            })}
          </div>
        </div>
    );
  }
}

export default App;
