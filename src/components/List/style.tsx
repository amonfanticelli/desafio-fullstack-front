import styled from "styled-components";

export const List = styled.ul`
  width: 73%;

  background: var(--color-grey-3);
  border-radius: 4px;
  padding: 22px 19px;
  gap: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  height: 100%;
  background: grey;
  border-radius: 4.06066px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  div {
    heigth: 100%;
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    justify-content: flex-start;
    flex-direction: column;
    gap: 0.2rem;
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: var(--color-grey-0);
    margin-right: 1rem;
  }

  button {
    color: var(--color-grey-0);
    background-color: transparent;
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;
