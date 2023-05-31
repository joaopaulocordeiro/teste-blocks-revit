import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 2.125rem 12.5rem 1.125rem 12.5rem;
  
  p {
    font-size: ${({ theme }) => theme.textSizes["title-subtitle-l"]};
    font-weight: 600;
  }
`;
