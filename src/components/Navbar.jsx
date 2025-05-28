import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo"></div>
      <nav className="navbar-menu">
        <a href="#inicio">Inicio</a>
        <a href="#caracteristicas">Características</a>
        <a href="#comprar">Comprar</a>
      </nav>
    </header>
  );
}

export default Navbar;
