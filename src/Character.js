const Character = (props) => {
        return(
            <div className="character-container">
                <button className="fav-btn" onClick={props.handleToggleFavourite} >FAV</button>
                <img alt="charater picture" src={props.picture} onClick={props.handleExtraInfo} ></img>
                <p>{props.name}</p>
            </div>
        )
}

export default Character