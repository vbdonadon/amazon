import React from 'react';

import * as S from './styled';

import AmazonPrime from '../../images/logos/amazon-prime.svg';
import Felipe from '../../images/users/felipe.png';

const Main = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Login>
          <img src={AmazonPrime} />
          <S.Title>Quem está assistindo?</S.Title>

          <S.Users>
            <S.UserItem>
              <S.UserImage src={Felipe} />
              <S.Name>Felipe</S.Name>
            </S.UserItem>
            <S.UserItem></S.UserItem>
            <S.UserItem></S.UserItem>
            <S.UserItem></S.UserItem>
          </S.Users>

          <S.Button>Gerenciar perfis</S.Button>
        </S.Login>
      </S.Container>
    </S.Wrapper>
  );
};

export default Main;
