import styled from "styled-components";

export const List = styled.ul`
  width: 70%;

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
  height: 3.046rem;
  background: grey;
  border-radius: 4.06066px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.375rem;
    color: #ffffff;
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    margin-right: 1.5rem;
    color: var(--color-grey-0);
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
