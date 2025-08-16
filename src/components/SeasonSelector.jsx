import React from "react";
import '../index.css'


function SeasonSelector({ season, onChange }) {
    return (
        <div className="season-selector-container">
            <label htmlFor="season-select">Selecciona temporada: </label>
            <select
                id="season-select"
                value={season}
                onChange={(e) => onChange(Number(e.target.value))}
            >
                <option value={1}>Temporada 1 (Kanto)</option>
                <option value={2}>Temporada 2 (Johto)</option>
                <option value={3}>Temporada 3 (Hoenn)</option>
                <option value={4}>Temporada 4 (Sinnoh)</option>
                <option value={5}>Temporada 5 (Unova)</option>
                <option value={6}>Temporada 6 (Kalos)</option>
                <option value={7}>Temporada 7 (Alola)</option>
                <option value={8}>Temporada 8 (Galar)</option>
                <option value={9}>Temporada 9 (Paldea)</option>
            </select>
        </div>
    );
}

export default SeasonSelector;