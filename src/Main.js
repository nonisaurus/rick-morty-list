import Character from "./Character";

const Main = (props) => {

    const onLoadCharactersMap = props.charactersToShow.map((character) => {
        return <Character 
            handleToggleFavourite={() => props.handleToggleFavourite(character)} 
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
                {onLoadCharactersMap}
            </div>
        )

}

export default Main