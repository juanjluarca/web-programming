import React from "react";

function Title() {
    return (
        <div className="main-title-container">
            <img
                src='/Poke_Ball_icon.svg'
                alt="PokeBall"
                className="title-icon"
            />
            <h1 className="main-title">Pokemon List</h1>
        </div>
    );
}

export default Title;
