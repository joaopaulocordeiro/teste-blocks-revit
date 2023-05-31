import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 65px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors["background-footer"]};
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  position: fixed;

  @media (max-width: 768px) {
    height: 160px;
    flex-direction: column;
    align-items: flex-start;
    padding: 14px;
    position: relative;
  }
`;

export const FooterLink = styled.a`
  margin: 0 18px;
  font-size: 16px;
  text-decoration: none;
  color: #000;

  @media (max-width: 768px) {
    margin-top: 12px;
    margin-left: 14px;
    font-size: 14px;
  }
`;
