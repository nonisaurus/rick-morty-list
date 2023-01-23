import React, {Component} from "react";

const Character = (props) => {
        return(
            <div className="character-container">
                <img src={props.picture}></img>
                <p>{props.name}</p>
            </div>
        )
}

export default Character