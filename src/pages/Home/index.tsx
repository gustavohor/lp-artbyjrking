import { Container } from "./styles";
import Banners from "./banners";
import Jobs from "./jobs";
import ClientsPartners from "./clients-partners";
import About from "./about";
import Map from "./map";
import Videos from "./videos";
import Media from "./media";
import Contact from "./contact";

export default function Homepage() {
  return (
    <Container>
      <Banners />
      <Jobs />
      <ClientsPartners />
      <About />
      <Map />
      <Videos />
      <Media />
      <Contact />
    </Container>
  );
}
