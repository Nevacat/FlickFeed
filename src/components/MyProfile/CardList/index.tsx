import React from 'react';
import CardItem from '../CardItem';
import * as S from './style';
import { Post } from '../../../interface/post';

type CardListProps = {
  posts: Post[];
};

function index({ posts }: CardListProps) {
  return (
    <S.CardContainer>
      <S.CardList>
        {posts?.map((post) => (
          <CardItem key={post.id} {...post} />
        ))}
      </S.CardList>
    </S.CardContainer>
  );
}

export default index;
