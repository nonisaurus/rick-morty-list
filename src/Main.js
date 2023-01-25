import Character from "./Character";
import AddingOwnCharacter from "./AddingOwnCharacter";

const Main = (props) => {

    const onLoadCharactersMap = props.charactersToShow.map((character) => {
        return <Character 
            handleToggleFavourite={() => props.handleToggleFavourite(character)} 
            handleExtraInfo={() => props.handleExtraInfo(character)}
            name={character.name} 
            picture={character.image} 
            key={character.id} />
    })

    // handleClick = (e) => {
//     e.stopPropagation()
    
//     console.log('Handling Fave click!')

//     // Add this line. You'll call the function passed through props
//     this.props.onFaveToggle()

//     // Delete the `setState` line. You no longer track state here
//     // this.setState({isFave: !this.state.isFave})
    
// }

        return(
            <div className="main-container">
                <AddingOwnCharacter />
                {onLoadCharactersMap}
            </div>
        )

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