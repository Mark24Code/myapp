import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div>
                <h1>Hello React!</h1>
                <ul>
                    <li><a href="/counter">Redux 计数器</a></li>
                    <li><a href="/todo">Redux Todo</a></li>
                </ul>
            </div>
        );
    }
}

export default App;