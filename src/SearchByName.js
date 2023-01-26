import React, {Component} from "react";

class SearchByName extends Component {
    constructor(props){
        super(props)
    }

    apiCallSearch = (e) => {
        e.preventDefault()
        this.props.APICall(`name=${this.props.searchValue}`)
      }

    render(){
        return(
            <div className="search">
                <form >
                    <label>
                        <input className="search-input" placeholder="Search by character:" input="text" onChange={this.props.handleSearchInput} />
                    </label>
                    <button className="search-btn" type="submit" onClick={this.apiCallSearch}  >GO</button>
                </form>         
            </div>
        )
    }
}

export default SearchByName