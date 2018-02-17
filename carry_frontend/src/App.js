import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Styles/carry-main.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App class1 class2" style={styles.container}>
        <h1>Shopping List for {this.props.name}</h1>
        <h2>{this.props.text}</h2>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

App.defaultProps = {
  text: 'default text'
}
const styles = {
  container: {
    color: "#acacac",
    fontSize: '15px'
  }
}

export default App;
