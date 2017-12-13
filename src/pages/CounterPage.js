import React, { Component } from 'react';
import Counter from '../components/counter'
class CounterPage extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div>
                <h1>Redux Counter Page</h1>
                <Counter />
            </div>
        );
    }
}

export default CounterPage;