import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Welcome to React</h1>
			<Link to="/" className="padding">Home</Link>
			<Link to="/about" className="padding">About Us</Link>
			<Link to="/career" className="padding">Career</Link>
			<Link to="/contact" className="padding">Contact Us</Link>
        </header>
        <p className="App-intro">
        Welcome to home Page
        </p>
      </div>
    );
  }
}

export default App;
