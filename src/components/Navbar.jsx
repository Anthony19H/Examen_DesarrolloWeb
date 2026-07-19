import './Navbar.css';

function Navbar({ total }) {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span className="brand-mark">⚽</span>
                <h1>Catálogo de Jugadores</h1>
            </div>

            <div className="navbar-counter" aria-label={`Total de jugadores cargados: ${total}`}>
                <span className="counter-label">Jugadores</span>
                <strong>{total}</strong>
            </div>
        </nav>
    );
}

export default Navbar;