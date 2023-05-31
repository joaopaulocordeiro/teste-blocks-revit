import styled from "styled-components";

export const HeaderHomeContainer = styled.div`
  width: 100%;
  height: 5.875rem;
  background-color: ${({ theme }) => theme.colors["background-color"]};
  display: flex;
  position: relative;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors["gradient-primary"]};
  }
`;

export const TitleHomeHeaderContainer = styled.div`
  margin: 29px 5%;
  background-image: ${({ theme }) => theme.colors["gradient-primary"]};
  background-size: 30% 4px;
  background-position: left bottom;
  background-repeat: no-repeat;
  
  h1 {
    font-size: 1.75rem;
  }

  @media (min-width: 768px) {
    margin: 29px 199px;
  }
`;