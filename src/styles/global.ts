import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors["background-color"]};
    }

    body, input, textarea, button {
    font: 400 ${({ theme }) =>
      theme.textSizes["text-text-m"]} 'Open sans', sans-serif;
      line-height: 160%;
  }

    button {
        cursor: pointer
    }
`;
