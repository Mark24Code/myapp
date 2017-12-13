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
        return (
            <div>
                {count}
            </div>
        );
    }
}


const CounterCont = connect(
        mapStateToProps,
        mapDispatchToProps
    )(Counter);

export default CounterCont;