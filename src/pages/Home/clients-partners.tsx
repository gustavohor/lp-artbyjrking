import { ClientsPartnersSection } from "./styles";
import { clientspartner } from "@/utils/clients-partners";
import { useDisclosure } from "react-use-disclosure";
import { useState } from "react";
import { ModalForm } from "@/components/Modal/index";

export default function ClientsPartners() {
  const [active, setActive] = useState(false);
  const {
    isOpen: isOpenImgs,
    toggle: toggleImgs,
    close: closeImgs,
  } = useDisclosure();

  return (
    <ClientsPartnersSection id="clients">
      <h2>clientes/parceiros</h2>
      <div>
        {clientspartner.map((clients) => (
          <section key={clients.id}>
            <img src={clients.img} alt={clients.title} />
            <span>{clients.title}</span>
          </section>
        ))}
      </div>
      <ModalForm isOpen={isOpenImgs} toggle={closeImgs} />
    </ClientsPartnersSection>
  );
}
