import React, { Component } from "react";
import Character from "./Character";
import AddingOwnCharacter from "./AddingOwnCharacter";

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            addCharacterName: '',
            addNickname: ''
        }
    }

    newCharacterName = (e) => {
        console.log('addTaskChange...', e)
        this.setState({
            addCharacterName: e.target.value
        })}
    
    addNewCharacter = (e) => {
        e.preventDefault()
        this.setState({
            // somehow have to add the new character to create new card in character component as a new character with the input field value as a name (and preset picture)
            addCharacterName: ''
        })
    }

    addNewCharacterCard = () => {
        <Character />
    }

    // ADDING NICKNAME
    addNicknameFunction = (character) => {
        const input = prompt("What's your nickname for this character?"); 
        //adding a new bit to the object
        character.nickName = input;
        this.setState({
          addNickname: input
        })
      }

    render(){
        const onLoadCharactersMap = this.props.charactersToShow.map((character) => {
        return <Character 
            handleToggleFavourite={() => this.props.handleToggleFavourite(character)} 
            handleExtraInfo={() => this.props.handleExtraInfo(character)}
            name={character.name} 
            picture={character.image} 
            key={character.id}
            addNicknameFunction={() => this.addNicknameFunction(character)}
            nickName={character.addNickname}
            />
    })
        return(
            <div className="main-container">
                <AddingOwnCharacter newCharacterName={this.newCharacterName} />
                <ul>
                    {onLoadCharactersMap}
                </ul>
                
            </div>
        )
    }
}

export default Main


// class Main extends Component {
//     constructor(props){
//         super(props)
//     }

//     onLoadCharacters = () => {
//         this.props.charactersToShow.map((character) => {
//             return <Character 
//                 handleToggleFavourite={(character) => this.props.handleToggleFavourite} 
//                 name={this.character.name} 
//                 picture={this.character.image} 
//                 key={this.character.id} />
//         })
//     }

//     render() {
//         return(
//             <div className="main-container">
//                 <Character />
//             </div>
//         )
//     }
// }

// export default Main