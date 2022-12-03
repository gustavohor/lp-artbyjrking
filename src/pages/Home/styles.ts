import styled from "styled-components";
import banner_job from "@/assets/banners/jobs.png";

export const Container = styled.div`
  * {
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
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
    grid-gap: 4.1vw;
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
