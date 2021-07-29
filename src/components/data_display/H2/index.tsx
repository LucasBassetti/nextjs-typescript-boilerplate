import { HTMLAttributes } from 'react';

import * as S from './styles';

export type H2Props = HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

const H2 = ({ children, ...props }: H2Props) => <S.H2 {...props}>{children}</S.H2>;

export default H2;
