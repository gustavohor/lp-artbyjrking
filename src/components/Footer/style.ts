import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #000;
  padding: 3rem 0;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  .contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 5rem;
    p,
    span,
    a {
      font-size: ${(props) => props.theme.fontSize.medium};
      font-weight: ${(props) => props.theme.fontWeight.bold};
      color: #fff;
      text-align: none;
      text-decoration: none;
    }
  }
  .networks {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .icons {
      margin-right: 2rem;
    }
  }
  @media screen and (max-width: 1350px) {
    div {
      flex-direction: column;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 1rem 0;
      .contact {
        padding-right: 0;
        p,
        span,
        a {
          font-size: 20px;
          color: #fff;
          text-align: none;
          text-decoration: none;
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    padding: 1rem;
    div {
      flex-direction: column;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 1rem 0;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 1rem;
    div {
      flex-direction: column;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      padding: 1rem 0;
    }
    .contact {
      align-items: center;
      p {
        text-align: center;
      }
    }
  }
`;
