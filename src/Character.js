const Character = (props) => {
        return(
            <div className="character-container">
                <img alt="charater picture" src={props.picture}></img>
                <p>{props.name}</p>
            </div>
        )
}

export default Character