import { useRef } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

import menuImg from "../../assets/menu.svg";
import closeImg from "../../assets/close.svg";

function Header({ backgroundColor = "auto" }) {
  const style = {
    backgroundColor: backgroundColor,
  };

  const sidebarRef = useRef(null);

  function showSidebar() {
    const sidebar = sidebarRef.current;

    sidebar.style.display = "flex";
  }

  function closeSidebar() {
    const sidebar = sidebarRef.current;

    sidebar.style.display = "none";
  }

  return (
    <header style={style}>
      <nav>
        <ul ref={sidebarRef} className="side-bar">
          <li style={{ cursor: "pointer" }} onClick={closeSidebar}>
            <img src={closeImg} alt="" />
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>

        <ul className="nav-list">
          <li>
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </li>
          <li className="hideOnMobile">
            <Link to="/servicos">Serviços</Link>
          </li>
          <li className="hideOnMobile">
            <Link to="/sobre">Sobre</Link>
          </li>
          <li className="hideOnMobile">
            <Link to="/contato">Contato</Link>
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={showSidebar}
            className="menu-button"
          >
            <img src={menuImg} width="33px" alt="" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
