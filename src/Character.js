const CharacterCard = (props) => {
        return(
            <div className="character-container">
                <button className="fav-btn" onClick={props.handleToggleFavourite} >FAV</button>

                <button className="nickname-btn" onClick={(e) => props.addNicknameFunction(e)} >NICK</button>

                <img alt="charater picture" src={props.picture} onClick={props.handleExtraInfo} ></img>

                <h1>{props.name}</h1>
                
                <p>{props.nickName}</p>
            </div>
        )
}

export default CharacterCard