import { Container } from "./style";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <Container>
      <div style={{ maxWidth: "2100px" }}>
        <div className="contact">
          <p>Negociações</p>
          <span>
            <a href="mailto:vendas@artbyjrking.com">vendas@artbyjrking.com</a>
          </span>
        </div>
        <div className="contact">
          <p>Geral</p>
          <span>
            <a href="mailto:contato@artbyjrking.com">contato@artbyjrking.com</a>
          </span>
        </div>
        <div className="contact">
          <p>Trabalhe Conosco</p>
          <span>
            <a href="mailto:vagas@artbyjrking.com">vagas@artbyjrking.com</a>
          </span>
        </div>
        <div className="contact">
          <p>
            É nosso cliente?
            <br />
            Envie sua crítica ou sugestão.
          </p>
          <span>
            <a href="mailto:ouvidoria@artbyjrking.com">
              ouvidoria@artbyjrking.com
            </a>
          </span>
        </div>
        <div className="networks">
          <a
            href="https://api.whatsapp.com/send/?phone=5521994183870&text&app_absent=0"
            target="_blank"
          >
            <AiOutlineWhatsApp size={50} color={"#fff"} className="icons" />
          </a>
          <a href="http://facebook.com/artbyjrking" target="_blank">
            <BsFacebook size={50} color={"#fff"} className="icons" />
          </a>
          <a href="http://instagram.com/artbyjrking" target="_blank">
            <AiOutlineInstagram size={50} color={"#fff"} className="icons" />
          </a>
          <a href="http://youtube.com/@artbyjrking" target="_blank">
            {" "}
            <AiOutlineYoutube size={50} color={"#fff"} className="icons" />
          </a>
        </div>
      </div>
    </Container>
  );
}
