import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} AirPods Pro. Todos los derechos reservados.</p>
        <ul>
          <li><a href="#">Política de privacidad</a></li>
          <li><a href="#">Términos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
