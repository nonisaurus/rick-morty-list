import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
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
        this.setState({
            addCharacterName: e.target.value
        })
        console.log(this.state.addCharacterName)
    }

    addNewCharacterClick = (e) => {
        e.stopPropagation()

        const ownCharacter = {
            name: this.state.addCharacterName,
            id: 'C-137',
            image: '',
            key: 'C137'
          }

        this.props.charactersToShow.unshift(ownCharacter.map(() => {
            return <CharacterCard 
            name={ownCharacter.name}
            id={ownCharacter.id}
            image={ownCharacter.image}
            key={ownCharacter.key}
             />
        }))
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
                    <AddingOwnCharacter newCharacterName={this.addNewCharacterClick} />
                </div>
                <div className="character-div" >
                    {onLoadCharactersMap}
                </div>
            </div>
        )
    }
}

export default Main

