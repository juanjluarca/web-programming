import { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";
import { getPokemonsWithDetails } from "../api/pokemonApi";
import "../index.css";
import { getLimitOffset } from "../utils/pokemonUtils";



function PokemonList({ season = 1 }) {

    const [pokemons, setPokemons] = useState([]);
    const { limit, offset } = getLimitOffset(season);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemonsWithDetails(limit, offset);
            setPokemons(data);
        };
        fetchData();
    }, [season, limit, offset]);

    return (
        <div className="pokemon-list">
            {pokemons.map((p) => (
                <PokeCard key={p.id} name={p.name} image={p.image} types={p.types} />
            ))}
        </div>
    );
}

export default PokemonList;
