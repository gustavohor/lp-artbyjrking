import styled from "styled-components";

interface ModalContainerProps {
  isOpen?: boolean;
  size: "sm" | "md" | "lg" | "xl";
}

export const Container = styled.div<ModalContainerProps>`
  width: 100vw;
  max-height: 100vh;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 1400;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
  padding: 10px;
  box-sizing: border-box;
  pointer-events: none;

  .modal__overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #00000066;
    z-index: -1;
  }

  .modal__content {
    height: 100%;
    width: 100%;
    overflow-y: hidden;
    background-color: transparent;
    transition: all 0.3s;
    padding-top: 58px;
    margin: 3.75rem 0;

    .content__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px 5px 0 0;
      background-color: #fff;
      border-top: 8px solid #50b4ac;
      position: relative;
      padding: 1rem;
      span {
        font-size: ${(props) => props.theme.fontSize.xlarge};
        font-weight: ${(props) => props.theme.fontWeight.semibold};
        color: #2c2c2c;
        padding-left: 1rem;
      }

      .header__icon {
        width: 116px;
        height: 116px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: calc(-58px - 4px);
        transform: translateX(-50%);
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          font-size: 2rem;
          color: #50b4ac;
        }

        &::before {
          content: "";
          background-color: #0fc2c010;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
        }
      }

      button {
        display: flex;
        padding: 5px;
        border-radius: 5px;
        transition: all 0.3s;
        cursor: pointer;
        background-color: transparent;
      }
    }

    .content__body {
      background-color: #fff;
    }

    .content__footer {
      background-color: #fff;
      padding: 1rem;
      border-radius: 0 0 5px 5px;
      display: flex;

      & > * {
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    ${(props) => {
      switch (props.size) {
        case "sm":
          return `
            max-width: 386px;
          `;

        case "md":
          return `
            max-width: 500px;
          `;

        case "lg":
          return `
            max-width: 800px;
          `;

        case "xl":
          return `
            max-width: 1140px;
          `;
      }
    }}
  }

  &.show {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
`;
