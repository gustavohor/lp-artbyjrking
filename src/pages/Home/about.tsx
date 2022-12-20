import { AboutSection } from "./styles";
import img_purple from "@/assets/banners/about_img.png";

export default function About() {
  return (
    <AboutSection id="about">
      <div className="div">
        <section className="column_first">
          <img src={img_purple} alt="imagem roxa" />
        </section>
        <section className="column_second">
          <h2>Há 10 anos conectando empresas e pessoas.</h2>
          <span>
            Somos especialistas em transformar desafios de negócios em
            resultados criativos.
            <br />
            <br />
            Somos a diferença que traz resultado.
          </span>
        </section>
      </div>
    </AboutSection>
  );
}
