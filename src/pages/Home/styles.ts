import styled from "styled-components";
import banner_job from "@/assets/banners/jobs.png";
import background_about from "@/assets/banners/about.png";
import background_contact from "@/assets/banners/contact.png";

export const Container = styled.div`
  * {
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  display: flex;
  flex-wrap: wrap;
`;

export const FirstSection = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  min-height: 53.5vw;
  max-height: 54vw;
  .slider {
    width: 100%;
    position: absolute;
    text-align: center;
    .mySwiper {
      .swiper-button-prev {
        display: none;
      }
      .swiper-button-next {
        display: none;
      }
      img {
        background-size: cover;
        background-repeat: no-repeat;
      }
      section {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h2 {
          font-size: ${(props) => props.theme.fontSize.xxxlarge};
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          line-height: 11vw;
        }
        h4 {
          font-size: ${(props) => props.theme.fontSize.xlarge};
          font-weight: ${(props) => props.theme.fontWeight.semibold};
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.2vw;
        }
      }
      .button {
        position: absolute;
        display: flex;
        top: 90%;
        left: 90%;
        transform: translate(-50%, -50%);
        z-index: 9;
        width: 15%;
        height: auto;
        .--prev,
        .--next {
          background: none;
          border: none;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    .slider {
      .mySwiper {
        section {
          h2 {
            font-size: 40px;
          }
          h4 {
            font-size: 16px;
          }
        }
      }
    }
  }
`;

export const JobsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-image: url(${banner_job});
  background-size: cover;
  background-repeat: no-repeat;
  .columns {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4.1vw;
    padding: 5vw 0;
    max-width: 1400px;
    justify-items: center;
    section {
      max-width: 20.8vw;
      align-items: center;
      display: flex;
      flex-direction: column;
      img {
        width: 100px;
        height: 100px;
      }
      h2 {
        font-size: ${(props) => props.theme.fontSize.medium};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        text-transform: uppercase;
        padding-top: 0.78vw;
        text-align: center;
      }
      span {
        font-size: ${(props) => props.theme.fontSize.small};
        font-weight: ${(props) => props.theme.fontWeight.semibold};
        padding-top: 1vw;
        color: #828282;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .columns {
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
      section {
        max-width: 80%;
        margin: 3rem auto;
      }
      h2 {
        font-size: 21px !important;
      }
      span {
        font-size: 18px !important;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .columns {
      grid-template-columns: 1fr;
      justify-items: center;
      section {
        max-width: 80%;
        align-items: center;
        display: flex;
        flex-direction: column;
        margin: 2rem auto;
      }
    }
  }
`;

export const ClientsPartnersSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  align-items: center;
  padding: 5vw 0;
  h2 {
    font-size: ${(props) => props.theme.fontSize.xxlarge};
    font-weight: ${(props) => props.theme.fontWeight.semibold};
    text-align: center;
    margin-bottom: 5vw;
    text-transform: uppercase;
  }
  div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 3vw;
    max-width: 1400px;
    section {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        text-align: center;
        font-size: ${(props) => props.theme.fontSize.large};
        font-weight: ${(props) => props.theme.fontWeight.bold};
      }
    }
  }
  @media screen and (max-width: 1000px) {
    h2 {
      font-size: 30px !important;
    }
    div {
      grid-template-columns: repeat(4, 1fr) !important;
      section {
        span {
          font-size: 21px;
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    div {
      grid-template-columns: repeat(2, 1fr) !important;
      section {
        margin-bottom: 2rem;
        img {
          max-width: 60%;
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }
`;

export const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-image: url(${background_about});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 7.39vw 0;
  justify-content: center;
  background-color: #000;
  .div {
    width: 1800px;
    display: flex;
    flex-direction: row;

    .column_first {
      width: 50%;
      display: flex;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
        margin-right: 7.12rem;
      }
    }
    .column_second {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: left;
      h2 {
        font-size: 67px;
        font-weight: ${(props) => props.theme.fontWeight.extraBold};
      }
      span {
        max-width: 100%;
        font-size: 36px;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .div {
      width: 100%;
      flex-direction: column;
      .column_first {
        width: 100%;
        img {
          width: 50%;
          height: 100%;
        }
      }
      .column_second {
        width: 100%;
        align-items: center;
        h2 {
          font-size: 40px;
          text-align: center;
        }
        span {
          font-size: 30px;
          text-align: center;
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .div {
      width: 100%;
      flex-direction: column;
      padding: 2rem 1rem;
      .column_first {
        width: 100%;
        img {
          width: 80%;
          height: 100%;
          margin-right: 3rem;
          margin-left: 3rem;
        }
      }
      .column_second {
        width: 100%;
        align-items: center;
        h2 {
          font-size: 30px;
          text-align: center;
          padding: 20px 0;
        }
        span {
          font-size: 18px;
          text-align: center;
        }
      }
    }
  }
`;

export const MapSection = styled.div`
  display: flex;
  background-color: #000;
  padding: 5vw 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: ${(props) => props.theme.fontSize.xxlarge};
    font-weight: ${(props) => props.theme.fontWeight.extraBold};
    text-align: center;
    padding-bottom: 3vw;
  }

  @media screen and (max-width: 800px) {
    h2 {
      font-size: 30px !important;
    }
  }
`;

export const VideoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vw 0;
  background-image: url(${background_about});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #000;
  .mySwiper {
    width: 80%;
    .swiper-button-next,
    .swiper-button-prev {
      top: 60% !important;
      width: calc(var(--swiper-navigation-size) / 44 * 27) !important;
      color: #fff;
    }
    .swiper-button-next,
    .swiper-rtl .swiper-button-prev {
      right: 10px !important;
      left: auto !important;
    }
    h2 {
      text-align: center;
      text-transform: uppercase;
      font-size: ${(props) => props.theme.fontSize.xxlarge};
      padding-bottom: 3rem;
    }
    .column {
      width: 80%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .player {
        width: 100%;
        height: 600px;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .mySwiper {
      width: 100%;
      h2 {
        font-size: 30px !important;
        padding-bottom: 1rem;
      }
      .column {
        width: 80%;
        .player {
          width: 100%;
          height: 400px;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .mySwiper {
      .swiper-button-next,
      .swiper-button-prev {
        top: 80% !important;
      }
      h2 {
        font-size: 20px !important;
      }
      .column {
        width: 80%;
        .player {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;

export const MediaSection = styled.div`
  display: flex;
  background-color: #000;
  padding: 5vw 0;
  flex-direction: column;
  h2 {
    font-size: ${(props) => props.theme.fontSize.xlarge};
    font-weight: ${(props) => props.theme.fontWeight.semibold};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    strong {
      font-weight: ${(props) => props.theme.fontWeight.bold};
    }
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
      width: auto;
      height: auto;
      padding: 0 6vw;
    }
  }
  @media screen and (max-width: 1000px) {
    h2 {
      font-size: 30px !important;
    }
    div {
      flex-direction: column;
      img {
        padding: 1.5rem 0;
        width: 30%;
        height: 30%;
      }
    }
  }
  @media screen and (max-width: 500px) {
    h2 {
      font-size: 20px !important;
    }
    div {
      flex-direction: column;
      img {
        padding: 1.5rem 0;
      }
    }
  }
`;

export const ContactSection = styled.div`
  padding: 3vw 0;
  background-image: url(${background_contact});
  background-size: cover;
  display: flex;
  justify-content: center;
  .div {
    max-width: 600px;
    h2 {
      font-size: ${(props) => props.theme.fontSize.xxlarge};
      font-weight: ${(props) => props.theme.fontWeight.bold};
      text-transform: uppercase;
      margin: 0 0 1rem 0;
    }
    span {
      color: #5e5e5e;
      font-size: ${(props) => props.theme.fontSize.medium};
      font-weight: ${(props) => props.theme.fontWeight.bold};
    }
    .column {
      margin: 1rem auto;
      form {
        input,
        textarea {
          width: 100%;
          font-size: ${(props) => props.theme.fontSize.large};
          font-weight: ${(props) => props.theme.fontWeight.bold};
          padding: 2rem 0 1rem 0;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid #fff;
          color: #fff;
          &::placeholder {
            color: #fff;
          }
        }
        .submit {
          margin-top: 3rem;
          padding: 1rem 0;
          width: 100%;
          background-color: transparent;
          font-size: ${(props) => props.theme.fontSize.large};
          font-weight: ${(props) => props.theme.fontWeight.bold};
          color: #fff;
          border: 3px solid #fff;
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .div {
      margin: 0 2rem;
      h2 {
        font-size: 30px !important;
      }
      span {
        font-size: 16px !important;
      }
      .column {
        form {
          input,
          textarea {
            font-size: 16px !important;
          }
        }
      }
    }
  }
`;

export const EmailSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5vw 0;
  background-image: url(${background_about});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #000;
  p {
    font-size: ${(props) => props.theme.fontSize.xxlarge};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    color: #fff;
    text-align: center;
    margin: 0;
    padding-bottom: 1rem;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  .number {
    font-size: ${(props) => props.theme.fontSize.xlarge};
  }
  @media screen and (max-width: 800px) {
    p {
      font-size: 30px !important;
    }
  }
  @media screen and (max-width: 500px) {
    p {
      font-size: 20px !important;
    }
  }
`;
