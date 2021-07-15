import * as S from './styles';

export type MainProps = {
  title?: string;
  description?: string;
};

const Main = ({
  title = 'Nextjs Boileplate',
  description = 'TypeScript, ReactJS, NextJS e Styled Components',
}: MainProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
);

export default Main;
