import React, {Component} from 'react';

class Inheritance extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <p>This is Inheritance</p>
                <div>=============</div>
                {this.props.children}
            </div>
        );
    }
}

export default Inheritance;