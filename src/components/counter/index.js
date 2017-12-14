import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch({ type: 'INCREMENT' }),
    onDecreaseClick: () => dispatch({ type: 'DECREMENT' }),
  }
}


class Counter extends Component {
    constructor(props) {
        super(props);

    }
    render(){
        let count = this.props.count;
        let onIncreaseClick = this.props.onIncreaseClick;
        let onDecreaseClick = this.props.onDecreaseClick;
        return (
            <div>
                <div>计数器:{count}</div>
                <div>
                    <button onClick={onIncreaseClick}>+1</button>
                    <button onClick={onDecreaseClick}>-1</button>
                </div>
            </div>
        );
    }
}


const CounterCont = connect(
        mapStateToProps,
        mapDispatchToProps
    )(Counter);


export default CounterCont;