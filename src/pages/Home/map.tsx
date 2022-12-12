import { MapSection } from "./styles";
import img_map from "@/assets/banners/map.png";

export default function Map() {
  return (
    <MapSection>
      <div style={{ maxWidth: "1400px" }}>
        <h2>LUGARES QUE JÁ CHEGAMOS</h2>
        <img src={img_map} alt="Mapa com localização de todos os clientes" />
      </div>
    </MapSection>
  );
}
