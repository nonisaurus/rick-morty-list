import React, {Component} from "react";

class Search extends Component {
    render(){
        return(
            <div className="search">
                <form>
                    <label>
                        <input type="text" name="name" placeholder="Search by character:" />
                    </label>
                    <input type="submit" value="go" />
                </form>         
            </div>
        )
    }
}

export default Search