import { createGlobalStyle, css, DefaultTheme, GlobalStyleComponent } from 'styled-components';

type GlobalStylesProps = {
  //
};

const GlobalStyles: GlobalStyleComponent<GlobalStylesProps, DefaultTheme> = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    src: local('Poppins Light'), local('Poppins-Light'),
        url('/fonts/poppins-v12-latin-300.woff2') format('woff2');
  }
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url('/fonts/poppins-v12-latin-regular.woff2') format('woff2');
  }
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('/fonts/poppins-v12-latin-600.woff2') format('woff2');
  }
  @font-face {
    font-display: swap;
    font-family: 'Suburbia';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/suburbia.ttf');
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      background: ${theme.colors.background};
      color: ${theme.colors.textPrimary};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.md};
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      font-family: ${theme.font.familyTitle};
    }
  `}
`;

export default GlobalStyles;
