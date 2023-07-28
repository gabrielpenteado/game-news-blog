import "./Navbar.css";
import logo from "../../images/gamenews.png";

export function Navbar() {
  return (
    <>
      <nav>
        <div className="input-search-space">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Search for news" />
        </div>

        <img src={logo} alt="Logo Game News" />

        <button>Entrar</button>
      </nav>
    </>
  );
}
