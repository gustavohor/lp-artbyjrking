import { ContactSection, EmailSection } from "./styles";

export default function Contact() {
  return (
    <>
      <ContactSection>
        <div className="div">
          <h2>Fale Conosco</h2>
          <span>
            Dúvidas?
            <br />
            Entre em contato com a gente!
          </span>
          <div className="column">
            <form action="onSubmit">
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Empresa" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Telefone" />
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={7}
                placeholder="Mensagem"
              ></textarea>
              <input type="submit" value="Enviar" className="submit" />
            </form>
          </div>
        </div>
      </ContactSection>
      <EmailSection>
        <p className="email">
          <a href="mailto:contato@artbyking.com">contato@artbyking.com</a>
        </p>
        <p className="number">
          <a href="">+55 21 99418-3870</a>
        </p>
      </EmailSection>
    </>
  );
}
