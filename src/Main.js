import React, { Component } from "react";
import CharacterCard from "./Character";
import AddingOwnCharacter from "./AddingOwnCharacter";

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            addCharacterName: '',
            addNickname: ''
        }
    }

    // SAVING INPUT VALUE
    newCharacterName = (e) => {
        console.log('addTaskChange...', e)
        this.setState({
            addCharacterName: e.target.value
        })

        const ownCharacter = {
                name: this.state.addCharacterName,
                id: 'C-137',
                image: ''
              }

    }

    addNewCharacterClick = (e) => {
        e.preventDefault()
        this.props.charactersToShow.push(this.newCharacterName)
    }


    // ADDING NICKNAME
    addNicknameFunction = (character) => {
        const input = prompt("What's your nickname for this character?"); 
        //adding a new bit to the object
        character.nickName = input;
        this.setState({
            // this function works if it is here but not if I delete this state
        })
      }

    render(){
        const onLoadCharactersMap = this.props.charactersToShow.map((character) => {
        return <CharacterCard 
            handleToggleFavourite={() => this.props.handleToggleFavourite(character)} 
            handleExtraInfo={() => this.props.handleExtraInfo(character)}
            name={character.name} 
            picture={character.image} 
            key={character.id}
            addNicknameFunction={() => this.addNicknameFunction(character)}
            nickName={character.nickName}
            />
    })
        return(
            <div className="main-container">
                <div className="add-character-div">
                    <AddingOwnCharacter newCharacterName={this.newCharacterName} />
                </div>
                <div className="character-div" >
                    {onLoadCharactersMap}
                </div>
            </div>
        )
    }
}

export default Main

