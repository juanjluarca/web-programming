import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

const getPokemonList = async (limit = 151, offset = 0) => {
    try {
        const res = await axios.get(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
        return res.data.results;
    } catch (err) {
        console.error("Error fetching Pokémon list:", err);
        return [];
    }
};

const getPokemonDetail = async (url) => {
    try {
        const res = await axios.get(url);
        console.log(res.data.description)
        return {
            id: res.data.id,
            name: res.data.name,
            image: res.data.sprites.other["official-artwork"].front_default,
            types: res.data.types.map((t) => t.type.name),
            description: res.data.description,
        };
    } catch (err) {
        console.error("Error fetching Pokemon detail:", err);
        return null;
    }
};

export const getPokemonsWithDetails = async (limit = 151, offset = 0) => {
    const list = await getPokemonList(limit, offset);
    const detailedData = await Promise.all(
        list.map(async (p) => await getPokemonDetail(p.url))
    );
    return detailedData;
};
