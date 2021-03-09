import React, { Component } from 'react';

// Using Functinoal based Components
const person = (props) => {
    return (
    <div>
        <p>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
    </div>
    ) 
};

// Using Class Based COmponents
// class person extends React.Component    {
//     render()    {
//         return  <p>Hello I am {this.props.name} and I am {this.props.age} years old!</p>
//     }
// }

export default person;