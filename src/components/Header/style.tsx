import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 10vh;
  min-height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-black);
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
`;

export const ContainerHeader = styled.div`
  width: 71%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    min-width: 6rem;
    width: 7%;
    height: 100%;
  }

  button {
    position: relative;
    padding: 1.4rem 1.1rem;
    padding-right: 1.1rem;
    font-size: 1.4rem;
    color: var(--color-black);
    letter-spacing: 0.3rem;

    &:hover {
      color: var(--color-red);

      transition: 0.8s;
    }
  }
`;
