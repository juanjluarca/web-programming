import React from "react";
import '../index.css'


function StatusSelector({ status, onChange }) {
    return (
        <div className="status-selector-container">
            <label htmlFor="status-select">Selecciona la clasificación: </label>
            <select
                id="status-select"
                value={status}
                onChange={(e) => onChange(Number(e.target.value))}
            >
                <option value={1}>Todas</option>
                <option value={2}>Completadas</ option>
                <option value={3}>Pendientes</ option>

            </select>
        </div>
    );
}

export default StatusSelector;