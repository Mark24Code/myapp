import React, { Component } from 'react';
import Counter from '../components/counter'
class CounterPage extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div>
                <div>
                    <h1>Redux Counter Page</h1>
                    <a href="/">返回首页</a>
                </div>

                <Counter />
            </div>
        );
    }
}

export default CounterPage;