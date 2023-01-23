import React, {Component} from "react";
import SearchByName from "./SearchByName";
import Filter from "./Filter";
import Favourite from "./Favourite";
import ExtraInfo from "./ExtraInfo";

class Aside extends Component {
    render(){
        return(
            <div className="aside-container">
                <p>Logo</p>
                <SearchByName />
                <Filter />
                <Favourite />
                <ExtraInfo />
                <p>made by me</p>
            </div>
        )
    }
}

export default Aside