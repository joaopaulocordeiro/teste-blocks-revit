import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: none;
  width: 235px;
  height: 43px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  position: relative;
  z-index: 1;
  font-size: ${({ theme }) => theme.textSizes["text-text-m"]};
  cursor: pointer;
  background: linear-gradient(to right, #a11cf3 0%, #d835c5 100%);

  &:before,
  &:after {
    content: " ";
    position: absolute;
    border-radius: 8px;
  }

  &:after {
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    background: linear-gradient(
      270deg,
      rgba(159, 15, 143, 1) 0%,
      rgba(104, 10, 162, 1) 100%
    );
    z-index: -1;
  }
`;

export const IconButtonContainer = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
