import styled from "styled-components";
import { theme } from "@/config/theme";

export const Container = styled.div`
  * {
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  display: flex;
  width: 100%;
`;

export const FirstSection = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
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
          font-size: 4.5rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          line-height: 100px;
        }
        h4 {
          font-size: ${(props) => props.theme.fontSize.xlarge};
          font-weight: ${(props) => props.theme.fontWeight.semibold};
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 20px;
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
`;
