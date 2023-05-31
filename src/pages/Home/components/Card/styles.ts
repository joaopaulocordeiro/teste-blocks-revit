import styled from "styled-components";

export const CardContainer = styled.div`
  width: 11rem;
  height: 14.625rem;
  border-radius: 8px;
  border: 1px solid #cccccc;
  background-color: ${({ theme }) => theme.colors["base-white"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin: 25px 40px 25px 40px;
    width: auto;
  height: 55%;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 36px;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;

  span {
    font-size: ${({ theme }) => theme.textSizes["text-text-s"]};
    font-weight: 600;
    line-height: 1.2;
  }
`;

export const VerticalLine = styled.div`
  height: 50%;
  border-right: 1px solid #000;
`;

export const IconContainer = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;