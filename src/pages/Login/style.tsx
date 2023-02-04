import styled from "styled-components";

export const MainTitle = styled.h1`
  color: var(--color-black);
  width: 85%;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  font-family: --font-sedgwick;
`;

export const Label = styled.label`
  width: 85%;
`;
export const Button = styled.button`
  width: 85%;
  height: 2.8rem;
  min-height: 1.5rem;

  background: linear-gradient(45deg, #000278, #3a276a);
  color: var(--color-white);
  border: 1.2182px solid #59323f;
  border-radius: 4px;
  margin-bottom: 2.125rem;

  &:hover {
    background-color: linear-gradient(45deg, #3a276a, #000278);
    color: var(--color-black);
    transition: 0.8s;
  }
`;
