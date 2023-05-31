import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 2.125rem 12.5rem 1.125rem 12.5rem;

  p {
    font-size: ${({ theme }) => theme.textSizes["title-subtitle-l"]};
    font-weight: 600;
    margin-bottom: 1.125rem;
  }

  @media (max-width: 1024px) {
    margin: 2.125rem 6.25rem 1.125rem 6.25rem;
  }

  @media (max-width: 768px) {
    margin: 2.125rem 3.125rem 1.125rem 3.125rem;
  }

  @media (max-width: 480px) {
    margin: 2.125rem 1.25rem 1.125rem 1.25rem;
  }
`;

export const CardGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;