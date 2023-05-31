import styled from "styled-components";

export const FixedBarContainer = styled.div`
  width: 100%;
  height: 67px;
  background-color: ${({ theme }) => theme.colors["black-background"]};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors["base-white"]};
  justify-content: center;
  gap: 1.125rem;
  
`;
