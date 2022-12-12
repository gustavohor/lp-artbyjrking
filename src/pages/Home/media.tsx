import { MediaSection } from "./styles";
import { logos } from "@/utils/media";

export default function Media() {
  return (
    <MediaSection>
      <h2>
        Estamos <strong>na mídia!</strong>
      </h2>
      <div>
        {logos.map((put) => (
          <img src={put.logo} alt={put.nome} />
        ))}
      </div>
    </MediaSection>
  );
}
