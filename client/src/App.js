// 1. Class component that fetches data from the server you now have running - the data can be fetched from `http://localhost:5000/api/players`

import React from 'react';
import './App.css';

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
          
        </div>
    );
  }
}

export default App;
