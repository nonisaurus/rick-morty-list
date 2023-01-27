import React, {Component} from "react";

class Favourite extends Component {
    render(){
        return(
            <div className="favourite">
                <div className="fav-show" >favourite</div>
                {/* on click call function AND toggle between show and back */}
                <button onClick={this.props.handleShowFavourites} >{this.props.currentlyShowing === 'allcharacters' ? 'Show' : 'Back'}</button>
                {/* toggle classname between hidden class and nothing */}
                <button className={(this.props.currentlyShowing === 'allcharacters' ? 'hidden' : '')} onClick={this.props.clearFavourites} >empty</button>
            </div>
            
        )
    }
}

export default Favourite
