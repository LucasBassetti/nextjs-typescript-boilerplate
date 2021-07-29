import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import P from 'components/data_display/P';

export const PersonCard = styled.div`
  display: flex;
  align-items: flex-start;
  /* flex-direction: column; */

  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: center;
  `}
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 100px;
    height: 150px;
    border: 2px solid ${theme.colors.textPrimary};
    position: relative;
    overflow: hidden;
    box-shadow: 2px 2px 10px #000;

    ${media.greaterThan('medium')`
      transform: skew(-10deg);
      border: 5px solid ${theme.colors.textPrimary};
      width: 200px;
      height: 250px;
    `}
  `}
`;

export const Image = styled.div`
  width: 100px;
  height: 150px;
  position: absolute;
  left: 0;
  top: 0;

  ${media.greaterThan('medium')`
    transform: skew(10deg);
    width: 250px;
    height: 250px;
    left: -30px;
  `}

  img {
    object-fit: cover;
  }
`;

export const ContentWrapper = styled.div`
  width: calc(100vw - 132px);
  padding: 0 16px;

  ${media.greaterThan('medium')`
    background: linear-gradient(to right, #000, transparent);
    transform: skew(-10deg);
    width: 500px;
    height: 200px;
    padding: 16px 32px;
  `}
`;

export const Content = styled.div`
  ${media.greaterThan('medium')`
    transform: skew(10deg);
  `}
`;

export const Name = styled.h3`
  font-size: 2.4rem;

  ${media.greaterThan('medium')`
    font-size: 4rem;
  `}
`;

export const Description = styled(P)`
  font-size: 1.2rem;
  line-height: 2rem;

  ${media.greaterThan('medium')`
    font-size: 1.8rem;
    line-height: 2.6rem;
    margin-top: 1rem;
  `}
`;
