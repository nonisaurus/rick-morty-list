const CharacterCard = (props) => {
        return(
            <div className="character-container">

                <img className="character-pic" alt="charater picture" src={props.picture} onClick={props.handleExtraInfo} ></img>

                <button className="character-btn fav-btn" onClick={props.handleToggleFavourite} ></button>

                <button className="character-btn nick-btn" onClick={(e) => props.addNicknameFunction(e)} ></button>
                <div className="character-name-contain">
                    <h1 className="character-name" >{props.name}</h1>

                    <p className="character-nick" >{props.nickName}</p>
                </div>
                
            </div>
        )
}

export default CharacterCard