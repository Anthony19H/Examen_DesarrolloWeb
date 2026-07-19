import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import JugadorList from './components/JugadorList';
import Footer from './components/Footer';

function App() {
  const [totalJugadores, setTotalJugadores] = useState(0);

  return (
    <div className="app-shell">
      <Navbar total={totalJugadores} />

      <Header />

      <main className="app-main">
        <JugadorList onCargados={setTotalJugadores} />
      </main>

      <Footer />
    </div>
  );
}

export default App;