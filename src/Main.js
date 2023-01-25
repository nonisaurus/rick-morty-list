import React, { Component } from "react";
import Character from "./Character";
import AddingOwnCharacter from "./AddingOwnCharacter";

class Main extends Component {
    constructor(props){
        super(props)
    }

    
    render(){
        const onLoadCharactersMap = this.props.charactersToShow.map((character) => {
        return <Character 
            handleToggleFavourite={() => this.props.handleToggleFavourite(character)} 
            handleExtraInfo={() => this.props.handleExtraInfo(character)}
            name={character.name} 
            picture={character.image} 
            key={character.id} />
    })
        return(
            <div className="main-container">
                <AddingOwnCharacter />
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