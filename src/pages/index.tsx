import capa from "@/assets/coming/capa.jpg";
import capaMobile from "@/assets/coming/capaMobile.png";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Container = styled.div`
  margin: 0;
  padding: 0;

  img {
    width: 100%;
    height: auto;
    background-size: contain;
  }
`;

export default function Coming() {
  const [image, setImage] = useState(capa);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1000) {
        setImage(capaMobile);
      } else {
        setImage(capa);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <img src={image} alt="capa" />
    </Container>
  );
}
