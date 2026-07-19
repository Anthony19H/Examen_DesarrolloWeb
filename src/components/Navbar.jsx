function Navbar({ total }) {
    return (
        <nav>
            {/* Nombre o logotipo textual */}
            <h1>Catálogo de Jugadores</h1>
            
            {/* Contador de jugadores cargados */}
            <div>
                <p>Total de jugadores: {total}</p>
            </div>
        </nav>
    );
}

export default Navbar;