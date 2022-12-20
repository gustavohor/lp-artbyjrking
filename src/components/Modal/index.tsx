import { Dispatch, SetStateAction } from "react";
import { Container } from "./styles";
import { Modal, ModalBody } from "@core/components/Modal";
import { clientspartner } from "@/utils/clients-partners";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

interface PropsModal {
  isOpen: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}

export function ModalForm({ isOpen, toggle }: PropsModal) {
  function CloseModal() {
    toggle(false);
  }

  return (
    <Container>
      <Modal isOpen={isOpen} toggle={CloseModal} size="xl">
        <ModalBody>a</ModalBody>
      </Modal>
    </Container>
  );
}
