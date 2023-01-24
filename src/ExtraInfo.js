import React, {Component} from "react";

class ExtraInfo extends Component {
    render(){
        return(
            <div className="extra-info">
                <h1>Name: </h1>
                <p>Species: </p>
                <p>Status: </p>
                <p>Origin: </p>
                <p>Location: </p>
            </div>
        )
    }
}

export default ExtraInfo