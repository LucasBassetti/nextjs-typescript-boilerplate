import Image from 'next/image';

import zanaImage from 'assets/zana.jpeg';
import P from 'components/data_display/P';

import * as S from './styles';

export type PersonCardProps = {
  //
};

const PersonCard = () => (
  <S.PersonCard>
    <S.ImageWrapper>
      <S.Image>
        <Image src={zanaImage} alt="Zana" layout="fill" />
      </S.Image>
    </S.ImageWrapper>
    <S.ContentWrapper>
      <S.Content>
        <S.Name>Lucas Zanandrea</S.Name>
        <S.Description>
          Lorem ipsum porta commodo ipsum leo tempus pretium consectetur, eleifend nisl ad est
          sapien aptent vel lacinia commodo, varius massa vel molestie vitae lorem libero.
        </S.Description>
      </S.Content>
    </S.ContentWrapper>
  </S.PersonCard>
);

export default PersonCard;
