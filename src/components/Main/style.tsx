import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  padding: 1rem;
  justify-content: center;
  background: var(--color-white);
  width: 100vw;
  height: 90vh;
  margin: 0px;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;
