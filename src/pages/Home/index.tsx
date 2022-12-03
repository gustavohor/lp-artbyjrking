import { Container } from "./styles";
import Banners from "./banners";
import Jobs from "./jobs";
import ClientsPartners from "./clients-partners";
import About from "./about";

export default function Homepage() {
  return (
    <Container>
      <Banners />
      <Jobs />
      <ClientsPartners />
      <About />
    </Container>
  );
}
