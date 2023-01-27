import React, {Component} from "react";

class Favourite extends Component {



    render(){
        return(
            <div className="favourite">
                <div > favourite </div>
                <button onClick={this.props.handleShowFavourites} >{this.props.currentlyShowing === 'allcharacters' ? 'Show' : 'Back'}</button>

                <button className={(this.props.currentlyShowing === 'allcharacters' ? 'hidden' : '')} onClick={this.props.clearFavourites} >empty</button>
            </div>
            
        )
    }
}

export default Favourite
