import PersonCard from 'components/data_display/PersonCard';

import * as S from './styles';

const About = () => {
  return (
    <S.Wrapper>
      <S.Title>Artistas</S.Title>
      <S.Content>
        <PersonCard />
      </S.Content>
    </S.Wrapper>
  );
};

export default About;
