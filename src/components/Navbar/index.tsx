import Menu from "@/assets/Icons/Menu.svg";
import { useState } from "react";
import { Link } from "react-scroll";
import { Container } from "./styles";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function Navbar() {
  const [isOpenMenu, setisOpenMenu] = useState(false);

  return (
    <Container>
      <nav
        className="navbar"
        style={{ backgroundColor: isOpenMenu ? "#000" : "" }}
        onClick={() => setisOpenMenu(!isOpenMenu)}
      >
        <div className="menu">
          <section className="-img--text">
            <img
              src={Menu}
              onClick={() => setisOpenMenu(!isOpenMenu)}
              alt="Menu"
            />
            <span> MENU</span>
          </section>
          {isOpenMenu && (
            <>
              <ul>
                <li>
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setisOpenMenu(false)}
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    to="clients"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setisOpenMenu(false)}
                  >
                    Clientes
                  </Link>
                </li>
                <li>
                  <Link
                    to="midia"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setisOpenMenu(false)}
                  >
                    Mídia
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setisOpenMenu(false)}
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
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
              <div className="networks">
                <a
                  href="https://api.whatsapp.com/send/?phone=5521994183870&text&app_absent=0"
                  target="_blank"
                >
                  <AiOutlineWhatsApp
                    size={50}
                    color={"#fff"}
                    className="icons"
                  />
                </a>
                <a href="http://facebook.com/artbyjrking" target="_blank">
                  <BsFacebook size={50} color={"#fff"} className="icons" />
                </a>
                <a href="http://instagram.com/artbyjrking" target="_blank">
                  <AiOutlineInstagram
                    size={50}
                    color={"#fff"}
                    className="icons"
                  />
                </a>
                <a href="http://youtube.com/@artbyjrking" target="_blank">
                  {" "}
                  <AiOutlineYoutube
                    size={50}
                    color={"#fff"}
                    className="icons"
                  />
                </a>
              </div>
            </>
          )}
        </div>
      </nav>
    </Container>
  );
}
