
import React from "react";

function Joke(props) {

    return (
        <div className="cards">
            <h3>{props.setup}</h3>
            <h2>{props.punchline}</h2>
        </div>
    );

}

export default Joke;
