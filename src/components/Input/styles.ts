import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  input {
    width: 85%;
    height: 2.8rem;
    min-height: 1.5rem;
    padding-left: 1rem;
    color: var(--color-white);
    background-color: var(--color-black);
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    min-width: 12rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  svg {
    position: absolute;
    color: red;
    right: 30%;

    color: #f10;
    width: 20px;
    height: 20px;
  }
`;

export const Error = styled.div`
  position: relative;
  display: flex;
  &:hover span {
    opacity: 1;
  }
  span {
    width: 155px;
    position: absolute;
    background-color: #ff7b7b;
    padding: 4px 15px;
    border-radius: 3px;
    left: 25px;
    top: -1px;
    opacity: 0;
    transition: opacity 0.4s;
    z-index: 1;
    &::before {
      content: "";
      border-style: solid;
      border-width: 10px 7px 0 7px;
      transform: rotate(90deg);
      border-color: #ff7b7b transparent;
      position: absolute;
      top: 4px;
      left: -7px;
    }
  }
`;
export const Label = styled.label`
  width: 85%;
`;
