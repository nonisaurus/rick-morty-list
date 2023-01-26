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
                    <input className="adding-character" placeholder="Wanna add your own character?" input="text" value={this.props.addCharacterName} onChange={this.props.newCharacterName} />
                </label>
                <button className="search-btn" type="submit" onClick={this.props.addNewCharacterClick} >ADD</button>
            </form>         
        </div>
        )
    }
}

export default AddingOwnCharacter