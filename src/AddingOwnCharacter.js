import React, { Component } from "react"

class AddingOwnCharacter extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="search">
            <form >
                <label>
                    {/* saving the input value*/}
                    <input className="adding-character" placeholder="What would you call your character?" input="text" value={this.props.addCharacterName} onChange={this.props.newCharacterName} />
                </label>
                {/* by adding it pushes to the front of the array */}
                <button className="search-btn" type="submit" onClick={this.props.addNewCharacterClick} >ADD</button>
            </form>         
        </div>
        )
    }
}

export default AddingOwnCharacter