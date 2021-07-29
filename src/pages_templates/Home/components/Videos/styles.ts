import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import H2 from 'components/data_display/H2';
import P from 'components/data_display/P';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.md} 0 ${theme.spacings.xxlg};
  `}
`;

export const Title = styled(H2)`
  text-align: center;

  > span {
    font-size: 12rem;

    ${media.greaterThan('medium')`
      font-size: 23rem;
    `}
  }
`;

export const Paragraph = styled(P)`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlg} auto 0;
    text-align: center;
    padding: 0 ${theme.spacings.md};
    max-width: ${theme.grid.container};
  `}
`;
