const ExtraInfo = (props) => {
        return(
            <div className="extra-info">
                {/* object operator checks how many keys are insinde the object */}
                {/* if there is no key than display this */}
                {Object.keys(props.current).length === 0 ? (
                    <div>
                        <h2 className="extra-info">Click on charater for more details.</h2>
                    </div>
                    // otherwise display passed down props from api info
                ) : (<div className="extra-info-container" >
                        <h1 className="extra-info-name" >{props.current.name}</h1>
                        <p>Species: {props.current.species}</p>
                        <p>Status: {props.current.status}</p>
                        <p>Origin: {props.current.origin.name}</p>
                        <p>Location: {props.current.location.name}</p>
                    </div>
                    )}
            </div>
        )

}

export default ExtraInfo