import logo from "../../images/gamenews.png";
import { Button, ImageLogo, InputSpace, Nav } from "./Navbar.style";

export function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Search for news" />
        </InputSpace>

        <ImageLogo src={logo} alt="Logo Game News" />

        <Button>Entrar</Button>
      </Nav>
    </>
  );
}
