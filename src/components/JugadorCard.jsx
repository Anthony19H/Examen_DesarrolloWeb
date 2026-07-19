function JugadorCard({ jugador }) {
    console.log("Datos del jugador:", jugador);

    return (
        <div>
            <h2>{jugador.name}</h2>
            <p>Edad: {jugador.age}</p>
            <p>Fecha de nacimiento: {jugador.birthDate}</p>
            <p>Club actual: {jugador.currentClub}</p>
            <p>Selección nacional: {jugador.nationalTeam}</p>
            <p>Posición: {jugador.position}</p>
            <p>Número de camiseta: {jugador.number}</p>
            <img
                src={jugador.photoUrl}
                alt={jugador.name}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
            />
        </div>
    );
}

export default JugadorCard;