import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const H1 = styled.h1`
  ${({ theme }) => css`
    font-size: 8rem;
    text-shadow: 5px 5px 2px ${theme.colors.background};

    ${media.greaterThan('medium')`
      font-size: 16rem;
    `}
  `}
`;
