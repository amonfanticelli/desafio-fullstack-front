import styled from "styled-components";

export const ImgContainer = styled.figure`
  width: 50%;
  height: 100%;
  background-color: var(--color-grey-1);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 500px;
`;
