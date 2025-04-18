import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer>
      <section className="company-info">
        <img src={logo} alt="logo" className="footer-logo" />
        <div className="footer-contact">
          <h3>São Paulo/SP</h3>
          <small>Av. das Nações Financeiras, 1200.</small>
          <small>Torre Sul</small>
          <small>Bairro Centro Corporativo</small>
          <small>04567-890</small>
        </div>
      </section>

      <section className="copyright">
        <small>&copy; 2025 Liboreiro. Todos os direitos reservados</small>
      </section>
    </footer>
  );
}

export default Footer;
