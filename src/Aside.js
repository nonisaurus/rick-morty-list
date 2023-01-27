import React, {Component} from "react";
import SearchByName from "./SearchByName";
import Filter from "./Filter";
import Favourite from "./Favourite";
import ExtraInfo from "./ExtraInfo";


class Aside extends Component {
    render(){
        return(
            <div className="aside-container">
                <div className="aside-elements">
                    <p className="logo-aside"></p>
                </div>
                <div className="aside-elements">
                    <SearchByName 
                    handleSearchInput={this.props.handleSearchInput}
                    searchValue={this.props.searchValue} 
                    APICall={this.props.APICall} 
                    />
                </div>
                <div className="aside-elements">
                    <Filter 
                    charactersToShow={this.props.charactersToShow}
                    APICall={this.props.APICall} 
                    />
                </div>
                <div className="aside-elements">
                    <Favourite 
                    handleShowFavourites={this.props.handleShowFavourites}
                    clearFavourites={this.props.clearFavourites}
                    currentlyShowing={this.props.currentlyShowing}
                    />                   
                </div>
                <div className="aside-elements">
                    <ExtraInfo
                    charactersToShow={this.props.charactersToShow}
                    current={this.props.current}
                    />
                </div>
                <div className="aside-elements">
                    <p className="footer-iguess"></p>
                </div>
            </div>
        )
    }
}

export default Aside