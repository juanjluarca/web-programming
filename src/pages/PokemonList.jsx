import { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";
import { getPokemonsWithDetails } from "../api/pokemonApi";
import "../index.css";


const getLimitOffset = (season) => {
    switch (season) {
        case 1: return { limit: 151, offset: 0 };
        case 2: return { limit: 100, offset: 151 };
        case 3: return { limit: 135, offset: 251 };
        case 4: return { limit: 107, offset: 386 };
        case 5: return { limit: 156, offset: 493 };
        case 6: return { limit: 72, offset: 649 };
        case 7: return { limit: 88, offset: 721 };
        case 8: return { limit: 96, offset: 809 };
        case 9: return { limit: 120, offset: 905 };
        default: return { limit: 151, offset: 0 };
    }
};


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
