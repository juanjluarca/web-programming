import '../index.css'

function PokeCard({
    name = "Default",
    image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    types = ["normal", "flying"]
}) {
    return (
        <article className="poke-card">
            <div className="poke-card-header">
                <h2>{name}</h2>
            </div>
            <div className="poke-card-image">
                <img src={image} alt={name} />
            </div>
            <div className="poke-card-types">
                {types.map((t) => (
                    <span key={t} className={`type ${t}`}>
                        {t}
                    </span>
                ))}
            </div>
        </article>
    );
}

export default PokeCard;
