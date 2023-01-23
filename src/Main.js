import React, {Component} from "react";
import Character from "./Character";

class Main extends Component {
    render(){
        return(
            <div className="main-container">
                <h1>title</h1>
                <Character />
            </div>
        )
    }
}

export default Main