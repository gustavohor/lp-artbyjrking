import Menu from "@/assets/Icons/Menu.svg";
import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { Link } from "react-scroll";
import { Container } from "./styles";

export default function Navbar() {
  const [isOpenMenu, setisOpenMenu] = useState(false);

  return (
    <Container>
      <nav className="navbar">
        <div className="menuMobile">
          <img
            src={Menu}
            onClick={() => setisOpenMenu(!isOpenMenu)}
            alt="Menu"
          />
          {isOpenMenu && (
            <>
              <div>
                <span>MENU</span>
              </div>
              <div>
                <HiOutlineX
                  size={35}
                  className="mobileCross"
                  onClick={() => setisOpenMenu(!isOpenMenu)}
                />
              </div>
              <ul>
                <li>
                  <Link
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setisOpenMenu(false)}
                  >
                    Trabalhos
                  </Link>
                </li>
                <li>
                  <Link
                    to="Products"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    onClick={() => setisOpenMenu(false)}
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    to="Team"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setisOpenMenu(false)}
                  >
                    Clientes
                  </Link>
                </li>
                <li>
                  <Link
                    className="contact"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setisOpenMenu(false)}
                  >
                    Mídia
                  </Link>
                </li>
                <li>
                  <Link
                    className="contact"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setisOpenMenu(false)}
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    className="contact"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setisOpenMenu(false)}
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>
    </Container>
  );
}
