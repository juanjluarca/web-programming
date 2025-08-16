import React from "react";
import PokeBallIcon from "../assets/Poke_Ball_icon.svg"; // importa el SVG

function Title() {
    return (
        <div className="main-title-container">
            <img
                src='src/assets/Poke_Ball_icon.svg'
                alt="PokeBall"
                className="title-icon"
            />
            <h1 className="main-title">Pokemon List</h1>
        </div>
    );
}

export default Title;
