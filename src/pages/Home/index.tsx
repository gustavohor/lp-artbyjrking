import { Container } from "./styles";
import Banners from "./banners";
import Jobs from "./jobs";

export default function Homepage() {
  return (
    <Container>
      <Banners />
      <Jobs />
    </Container>
  );
}
