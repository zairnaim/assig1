import React, {Component} from 'react';

class UserInput extends Component{
    render(){
        return(
            <div>
                <input type = "text" onChange = {this.props.changed} value = {this.props.name} ></input>
            </div> 
        );
    }
}

export default UserInput;