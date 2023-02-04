import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: 50%;
  height: 100%;
  /* min-height: 500px;
  max-height: 550px; */
  padding: 25px 50px 25px;

  background-color: var(--color-white);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0px;
  }
`;
