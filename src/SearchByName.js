import React, {Component} from "react";

class SearchByName extends Component {
    constructor(props){
        super(props)
    }

    apiCallSearch = (e) => {
        e.preventDefault()
        console.log('apicallsearch >>>', this.props.searchValue)
        this.props.APICall(`name=${this.props.searchValue}`)
      }

    render(){
        return(
            <div className="search">
                <form >
                    <label>
                        <input placeholder="Search by character:" input="text" onChange={this.props.handleSearchInput} />
                    </label>
                    <button type="submit" onClick={this.apiCallSearch}  >search</button>
                </form>         
            </div>
        )
    }
}

export default SearchByName