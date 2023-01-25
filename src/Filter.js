import React, {Component} from "react";

class Filter extends Component {
    constructor(props){
        super(props)
        this.state = {
            charactersToShow: this.props.charactersToShow
        }
    }

    apiCallFilter = (event) => {
        this.props.APICall(`status=${event.target.value}`)
    }

    render(){
        return(
            <div className="filter">
                <label>
                Status?
                <select onChange={this.apiCallFilter}>
                <option value="" >choose</option>
                <option value="alive" >Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
                </select>
                </label>
            </div>
        )
    }
}

export default Filter