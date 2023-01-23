import React from "react";
import Character from "./Character";

const Main = (props) => {

    const onLoadCharactersMap = props.onLoadCharacters.map((character, index) => {
        console.log(character, index)
        return <Character name={character.name} picture={character.image} key={character.id} />
    })

        return(
            <div className="main-container">
                <h1>title</h1>
                {onLoadCharactersMap}
            </div>
        )

}

export default Main