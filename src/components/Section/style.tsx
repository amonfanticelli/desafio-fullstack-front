import styled from "styled-components";

export const Section = styled.section`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 70%;
  display: flex;
  justify-content: space-between;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--color-grey-0);
  }
  button {
    line-height: 38px;
    padding: 0px 16.2426px;
    color: var(--color-grey-0);
    background: var(--color-grey-3);
    border-radius: 4px;
    &:hover {
      background-color: var(--color-grey-0);
      color: var(--color-grey-3);
      transition: 0.5s;
    }
  }
`;
