import { useEffect, useState } from "react";
import JugadorCard from "./JugadorCard"; // IMPORTANTE: Cambia el import

function JugadorList({ onCargados }) { // Recibimos la función para el contador
    const [jugadores, setJugadores] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setCargando(true);

        // USAMOS LA URL OFICIAL
        fetch('https://jugadores.up.railway.app/players')
            .then((response) => {
                if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
                return response.json();
            })
            .then((respuesta) => {
                // La guía dice que los datos están en 'respuesta.data'
                const lista = respuesta.data;
                setJugadores(lista);
                
                // Actualizamos el contador en App.jsx
                onCargados(lista.length); 
                
                setCargando(false);
            })
            .catch((errorPeticion) => {
                setError(errorPeticion.message);
                setCargando(false);
            });
    }, [onCargados]);

    if (cargando) return <div><h1>Cargando jugadores...</h1></div>;
    
    if (error) return <div><h1>Error al conectar: {error}</h1></div>;

    // Si la lista está vacía
    if (jugadores.length === 0) return <div><h1>No hay jugadores disponibles</h1></div>;

    return (
        <div>
            <h1>Sección de Jugadores</h1>
            <div>
                {jugadores.map((jugador) => (
                    // Pasamos cada jugador a la tarjeta
                    <JugadorCard key={jugador.id} jugador={jugador} />
                ))}
            </div>
        </div>
    );
}

export default JugadorList;