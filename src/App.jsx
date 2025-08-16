import { useState } from "react";
import PokemonList from "./pages/PokemonList";
import SeasonSelector from "./components/SeasonSelector";

export function App() {
    const [season, setSeason] = useState(2);

    return (
        <>
            <SeasonSelector season={season} onChange={setSeason} />
            <PokemonList season={season} />
        </>
    );
}
