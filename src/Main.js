import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
import AddingOwnCharacter from "./AddingOwnCharacter";


class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            addCharacterName: ''
        }
    }

    // SAVING INPUT VALUE
    newCharacterName = (e) => {
        e.stopPropagation()
        this.setState({
            addCharacterName: e.target.value
        })
        console.log(this.state.addCharacterName)
    }

    // ADDING NEW CHARACTER 
    addNewCharacterClick = (e) => {
        e.preventDefault()
        const ownCharacter = {
            name: this.state.addCharacterName,
            id: Math.floor(Math.random() * 1000),
            image: ''
          }

        this.setState({
            addCharacterName: ''
        })
          console.log(e)
          console.log("characters", ownCharacter)

        this.props.charactersToShow.unshift(ownCharacter)
    }


    // ADDING NICKNAME
    addNicknameFunction = (character) => {
        const input = prompt("What's your nickname for this character?"); 
        //adding a new bit to the object
        character.nickName = input;
        this.setState({
            // this function works if it is here but not if I delete this state WHY???
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
                    <AddingOwnCharacter 
                    addCharacterName={this.state.addCharacterName}
                    newCharacterName={this.newCharacterName}
                    addNewCharacterClick={this.addNewCharacterClick} />
                </div>
                <div className="character-div" >
                    {onLoadCharactersMap}
                </div>
            </div>
        )
    }
}

export default Main

