import Character from "./Character";

const Main = (props) => {

    const onLoadCharactersMap = props.charactersToShow.map((character, index) => {
        return <Character name={character.name} picture={character.image} key={character.id} />
    })

        return(
            <div className="main-container">
                {onLoadCharactersMap}
            </div>
        )

}

export default Main