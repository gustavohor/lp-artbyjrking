import styled from "styled-components";

export const Container = styled.div`
  .navbar {
    z-index: 999999;
    position: fixed;
    padding: 3rem;
    opacity: 0.92;
    width: 100%;
    height: 100%;

    .menu {
      .-img--text {
        display: flex;
        flex-direction: row;
        span {
          padding-left: 1rem;
        }
      }
      ul {
        list-style-type: none;
        flex-wrap: wrap;
        margin-top: 3rem;
      }
      li {
        display: flex;
        font-size: 50px;
        font-weight: ${(props) => props.theme.fontWeight.semibold};
        text-transform: uppercase;
        color: #4a4a4a;
        line-height: 80px;
        &:hover {
          color: #fff;
          text-decoration: underline;
        }
      }
    }
    .networks {
      display: flex;
      .icons {
        margin-top: 10rem;
        margin-right: 2rem;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .navbar {
      padding: 1rem;
      .menu {
        li {
          font-size: 40px;
        }
      }
    }
  }
`;
