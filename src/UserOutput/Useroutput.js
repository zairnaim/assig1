import React, {Component} from "react";

class Useroutput extends Component{
    render(){
        return(
            <div>
                <p>
                    "Hi I'm paragraph number 1 and I show the username"
                </p>
                <p>
                    Username: {this.props.name}
                </p>
            </div>
        );
    }
}

export default Useroutput;