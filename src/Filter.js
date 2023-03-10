import React, {Component} from "react";

class Filter extends Component {
    constructor(props){
        super(props)
        this.state = {
            charactersToShow: this.props.charactersToShow
        }
    }

    // api call and changes end of url
    apiCallFilter = (event) => {
        this.props.APICall(`status=${event.target.value}`)
    }

    render(){
        return(
            <div className="filter">
                <label >
                Status?  
                {/* calling the function based on what you click on */}
                <select className="status-label" onChange={this.apiCallFilter}>
                    <option value="" >choose</option>
                    <option value="Alive" >Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
                </label>
            </div>
        )
    }
}

export default Filter