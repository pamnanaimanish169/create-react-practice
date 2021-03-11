import React, { Component } from 'react';

class Counter   extends React.Component {
    constructor()   {
        this.state  =   { count :   0};
        this.incrementCount =   this.incrementCount.bind(this);
    }

    incrementCount()    {
        this.setState({ count   :   this.state.count    +   1});
    }

    render()    {
        return  (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.incrementCount}>Click Me</button>
            </div>
        )
    };
}

export  default Counter;