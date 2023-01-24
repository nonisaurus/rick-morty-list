import React, {Component} from "react";

class Favourite extends Component {
    render(){
        return(
            <div>
                <div className="favourite"> favourite </div>
                <button onClick={this.props.handleShowFavourites} >show</button>
                <button onClick={this.props.clearFavourites} >empty</button>
            </div>
            
        )
    }
}

export default Favourite
