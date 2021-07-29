import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const H2 = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.titleSizes.xlg};
    text-shadow: 3px 3px 2px #000000;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.titleSizes.xxlg};
    `}
  `}
`;
