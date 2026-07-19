import { useEffect, useState } from "react";
import './JugadorList.css';
import JugadorCard from "./JugadorCard";

function JugadorList({ onCargados }) {
    const [jugadores, setJugadores] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setCargando(true);

        fetch('https://jugadores.up.railway.app/players')
            .then((response) => {
                if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
                return response.json();
            })
            .then((respuesta) => {
                const lista = respuesta.data;
                setJugadores(lista);
                onCargados(lista.length);
                setCargando(false);
            })
            .catch((errorPeticion) => {
                setError(errorPeticion.message);
                setCargando(false);
            });
    }, [onCargados]);

    if (cargando) return (
        <section className="catalog-section">
            <div className="section-heading">
                <h2>Jugadores destacados</h2>
                <p>Estamos preparando el catálogo más reciente para ti.</p>
            </div>
            <div className="state-card loading-state" role="status" aria-live="polite">
                <div className="skeleton skeleton-image"></div>
                <div className="skeleton skeleton-line"></div>
                <div className="skeleton skeleton-line short"></div>
            </div>
        </section>
    );

    if (error) return (
        <section className="catalog-section">
            <div className="section-heading">
                <h2>Jugadores destacados</h2>
                <p>No fue posible cargar la información en este momento.</p>
            </div>
            <div className="state-card error-state" role="alert">
                <h3>Oops, algo salió mal</h3>
                <p>{error}</p>
            </div>
        </section>
    );

    if (jugadores.length === 0) return (
        <section className="catalog-section">
            <div className="section-heading">
                <h2>Jugadores destacados</h2>
                <p>No hay jugadores disponibles por el momento.</p>
            </div>
            <div className="state-card empty-state">
                <h3>Sin resultados</h3>
                <p>Vuelve a intentarlo más tarde.</p>
            </div>
        </section>
    );

    return (
        <section className="catalog-section">
            <div className="section-heading">
                <h2>Jugadores destacados</h2>
                <p>Explora el perfil completo de cada futbolista y encuentra los datos más relevantes.</p>
            </div>
            <div className="player-grid">
                {jugadores.map((jugador) => (
                    <JugadorCard key={jugador.id} jugador={jugador} />
                ))}
            </div>
        </section>
    );
}

export default JugadorList;