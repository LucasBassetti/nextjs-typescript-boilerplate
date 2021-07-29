import { HTMLAttributes } from 'react';

import * as S from './styles';

export type H1Props = HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

const H1 = ({ children, ...props }: H1Props) => <S.H1 {...props}>{children}</S.H1>;

export default H1;
