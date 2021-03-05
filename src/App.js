import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>Some Content</div>
        <Footer />
      </div>
    );

    // return React.createElement('table', {className: 'App'}, React.createElement('tr', null, React.createElement('th', null, 'Company'), React.createElement('th', null, 'Contract'),React.createElement('th', null, 'Country')), React.createElement('tr', null, React.createElement('td', null, 'Alfreds Futterkiste'), React.createElement('td', null, 'Maria Anders'), React.createElement('td', null, 'Germany')));
  }
}

export default App;
