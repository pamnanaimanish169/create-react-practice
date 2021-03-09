import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      { name  : 'Max',  age : 28},
      { name  : 'Manu',  age : 29},
      { name  : 'Stephanie',  age : 26}
    ],
    otherState: 'some other value'
  };

  switchHandler = ()  =>  {
    this.setState({
      persons:  [
        { name  : 'Maximillian', age  : 28},
        { name  : 'Manu',  age : 29},
        { name  : 'Stephanie',  age : 27}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <div>Some Content</div>
        <button onClick={this.switchHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies:  Racing</Person>
        <Person name={this.state.persons[2].name}  age={this.state.persons[2].age}/>
      </div>
    );

    // return React.createElement('table', {className: 'App'}, React.createElement('tr', null, React.createElement('th', null, 'Company'), React.createElement('th', null, 'Contract'),React.createElement('th', null, 'Country')), React.createElement('tr', null, React.createElement('td', null, 'Alfreds Futterkiste'), React.createElement('td', null, 'Maria Anders'), React.createElement('td', null, 'Germany')));
  }
}

export default App;
