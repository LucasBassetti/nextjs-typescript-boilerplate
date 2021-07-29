import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const P = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    line-height: 3rem;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlg};
      line-height: 4rem;
    `}
  `}
`;
