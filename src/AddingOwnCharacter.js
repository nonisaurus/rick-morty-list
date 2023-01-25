import React, { Component } from "react"

class AddingOwnCharacter extends Component {
    constructor(props){
        super(props)
        this.state = {
            addCharacterName: ''
        }
    }

    newCharacterName = (e) => {
    console.log('addTaskChange...', e)

    this.setState({
        addCharacterName: e.target.value
    })}

    render() {
        return(
            <div className="search">
            <form >
                <label>
                    <input placeholder="Wanna add your own character?" input="text" onChange={this.newCharacterName} />
                </label>
                <button type="submit" >ADD</button>
            </form>         
        </div>
        )
    }
}

export default AddingOwnCharacter