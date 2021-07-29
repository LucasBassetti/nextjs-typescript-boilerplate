import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import H1 from 'components/data_display/H1';
import H2 from 'components/data_display/H2';

export const Wrapper = styled.section`
  background-image: url('/background.jpeg');
  background-size: cover;
  min-height: 100vh;
  position: relative;
`;

export const Mask = styled.div`
  ${({ theme }) => css`
    background: ${`linear-gradient(to top, ${theme.colors.background}, transparent)`};
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: ${theme.layers.base};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    z-index: ${theme.layers.menu};
  `}
`;

export const Title = styled(H1)`
  text-align: center;

  > span {
    font-size: 12rem;

    ${media.greaterThan('medium')`
      font-size: 23rem;
    `}
  }
`;

export const Subtitle = styled(H2)`
  text-align: center;
  margin-bottom: 3rem;
`;
