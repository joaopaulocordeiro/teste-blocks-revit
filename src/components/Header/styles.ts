import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;
  background: ${({ theme }) => theme.colors["base-white"]};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;

  img {
    width: 146px;
    height: 54px;
  }
`;
