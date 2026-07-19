import './JugadorCard.css';

function JugadorCard({ jugador }) {
    return (
        <article className="player-card">
            <div className="player-image-wrap">
                <img
                    className="player-image"
                    src={jugador.photoUrl}
                    alt={jugador.name}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300x360?text=Jugador'; }}
                />
            </div>
            <div className="player-info">
                <div className="player-title-row">
                    <h3>{jugador.name}</h3>
                    <span className="player-number">#{jugador.number}</span>
                </div>
                <p className="player-position">{jugador.position}</p>
                <ul className="player-details">
                    <li><span>Edad</span><strong>{jugador.age}</strong></li>
                    <li><span>Nacimiento</span><strong>{jugador.birthDate}</strong></li>
                    <li><span>Club</span><strong>{jugador.currentClub}</strong></li>
                    <li><span>Selección</span><strong>{jugador.nationalTeam}</strong></li>
                </ul>
            </div>
        </article>
    );
}

export default JugadorCard;