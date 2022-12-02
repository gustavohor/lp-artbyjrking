import { Container } from "./styles";
import Banners from "./banners";
import Jobs from "./jobs";
import ClientsPartners from "./clients-partners";

export default function Homepage() {
  return (
    <Container>
      <Banners />
      <Jobs />
      <ClientsPartners />
    </Container>
  );
}
