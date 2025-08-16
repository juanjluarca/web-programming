import { useState } from "react";
import PokemonList from "./pages/PokemonList";
import SeasonSelector from "./components/SeasonSelector";
import Title from "./components/title";

export function App() {
    const [season, setSeason] = useState(1);

    return (
        <>
            <Title />
            <SeasonSelector season={season} onChange={setSeason} />
            <PokemonList season={season} />
        </>
    );
}
