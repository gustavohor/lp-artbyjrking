import { ClientsPartnersSection } from "./styles";
import { clientspartner } from "@/utils/clients-partners";

export default function ClientsPartners() {
  return (
    <ClientsPartnersSection>
      <h2>clientes/parceiros</h2>
      <div>
        {clientspartner.map((clients) => (
          <section key={clients.id}>
            <img src={clients.img} alt={clients.title} />
            <span>{clients.title}</span>
          </section>
        ))}
      </div>
    </ClientsPartnersSection>
  );
}
