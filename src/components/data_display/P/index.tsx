import { HTMLAttributes } from 'react';

import * as S from './styles';

export type PProps = HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
};

const P = ({ children, ...props }: PProps) => <S.P {...props}>{children}</S.P>;

export default P;
